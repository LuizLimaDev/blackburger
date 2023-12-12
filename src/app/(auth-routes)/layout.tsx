import { authOptions } from "@/services/auth/authOptions";
import { TChildrenProps } from "@/types/children";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignIn({ children }: TChildrenProps) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/home");
  }

  return <>{children}</>;
}
