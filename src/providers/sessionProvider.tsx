"use client";

import { IChildrenProps } from "@/types/children";
import { SessionProvider } from "next-auth/react";

export default function NextAuthProvider({ children }: IChildrenProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
