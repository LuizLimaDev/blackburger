import NextAuth from "next-auth/next";
import UserLoged from "../components/Navigation/BottomNavigation/UserLoged/UserLoged";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      image: string;
      token?: string;
      UserLoged?: {
        id: number;
        email: string;
        name: string;
        phone: string;
      };
    };
  }
}
