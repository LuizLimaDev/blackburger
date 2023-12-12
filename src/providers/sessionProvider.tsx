"use client";

import { TChildrenProps } from "@/types/children";
import { SessionProvider } from "next-auth/react";

export default function NextAuthProvider({ children }: TChildrenProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
