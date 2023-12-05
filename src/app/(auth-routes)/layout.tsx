import { authOptions } from "@/services/auth/authOptions";
import { IChildrenProps } from "@/types/children";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignIn({ children }: IChildrenProps) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/home");
  }

  return <>{children}</>;
}