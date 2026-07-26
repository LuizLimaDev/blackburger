import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import supabase from "../supabase/supabase";
const bcrypt = require("bcrypt");

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "blackburgerSingIn",
      name: "blackburger",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.warn("[auth] Missing credentials payload in authorize callback");
          return null;
        }

        const email = String(credentials.email).trim().toLowerCase();

        const { data, error } = await supabase
          .from("users")
          .select()
          .ilike("email", email)
          .maybeSingle();

        if (error) {
          console.error("[auth] Supabase users query failed", {
            code: error.code,
            message: error.message,
            details: error.details,
            hint: error.hint,
          });
          return null;
        }

        if (!data) {
          console.warn("[auth] User not found", { email });
          return null;
        }

        if (!data?.password) {
          console.warn("[auth] User found without password hash", { email });
          return null;
        }

        const passwordVerification = await bcrypt.compare(
          String(credentials.password),
          String(data.password)
        );

        if (!passwordVerification) {
          console.warn("[auth] Invalid credentials", { email });
          return null;
        }

        const user = {
          id: data.id,
          name: data.name,
          email: data.email,
        };

        if (user) return user;

        return null;
      },
    }),
    FacebookProvider({
      name: "facebook",
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    GoogleProvider({
      name: "google",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;

      return session;
    },
  },
};
