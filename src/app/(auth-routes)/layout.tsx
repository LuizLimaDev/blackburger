import { authOptions } from "@/services/auth/authOptions";
import supabase from "@/services/supabase/supabase";
import { TChildrenProps } from "@/types/children";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignIn({ children }: TChildrenProps) {
  const session = await getServerSession(authOptions);
  const userData = {
    name: session?.user.name,
    email: session?.user.email,
    phone: null,
    password: null,
  };

  async function signUpNewUser() {
    const { error } = await supabase.from("users").insert(userData);

    if (error) {
      return Response.json(error);
    }

    console.log("cadastrando USUARIO!");
  }

  if (session) {
    const { data } = await supabase.from("users").select();

    const emailVerification = data?.some(
      (user) => user.email === userData.email
    );

    !emailVerification && signUpNewUser();

    redirect("/home");
  }

  return <>{children}</>;
}
