import { signIn } from "next-auth/react";

export const signInresult = async (provider: string) => {
  await signIn(provider, { redirect: false });
};
