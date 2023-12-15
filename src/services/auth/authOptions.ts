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
        let { data, error } = await supabase
          .from("users")
          .select()
          .eq("email", `${credentials?.email}`)
          .single();

        if (error) {
          throw new Error("Email ou senha inválido!");
        }

        const passwordVerification = await bcrypt.compare(
          credentials?.password,
          data.password
        );

        if (!passwordVerification || credentials?.email !== data.email) {
          throw new Error("Email ou senha inválido!");
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
