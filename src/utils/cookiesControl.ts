"use server";

import { cookies } from "next/headers";

export async function deleteCookies() {
  cookies().delete("_vcn");
  cookies().delete("_vercel_jwt");
  cookies().delete("next-auth.pkce.code_verifier");
}
