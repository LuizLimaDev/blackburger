import { authOptions } from "@/services/auth/authOptions";
import supabase from "@/services/supabase/supabase";
import { TChildrenProps } from "@/types/children";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignIn({ children }: TChildrenProps) {
  const session = await getServerSession(authOptions);

  if (session) {
    const userData = {
      name: session.user.name,
      email: session.user.email,
      phone: null,
      password: null,
    };

    const { data } = await supabase.from("users").select();

    const emailVerification = data?.some(
      (user) => user.email === userData.email
    );

    if (emailVerification) {
      console.log("Cadastrando novo USUARIO!");
      redirect("/home");
      return;
    }

    const { error } = await supabase.from("users").insert(userData);

    if (error) {
      return Response.json(error);
    }

    redirect("/home");
  }

  return <>{children}</>;
}
