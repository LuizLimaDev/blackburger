import { signIn } from "next-auth/react";

export const signInresult = async (provider: string) => {
  return signIn(provider, { callbackUrl: "/home" });
};
