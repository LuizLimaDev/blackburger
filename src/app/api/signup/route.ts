const bcrypt = require("bcrypt");
import supabase from "@/services/supabase/supabase";

export async function POST(request: Request) {
  const { name, email, phone, password } = await request.json();

  const passwordCryptograpy = await bcrypt.hash(password, 10);

  const { data } = await supabase.from("users").select();

  const emailVerification = data?.some((user) => user.email === email);

  // TODO - Verificar pq ele nao retorna o erro
  if (emailVerification) {
    return Response.json({ message: "Email já cadastrado!" }, { status: 400 });
  } else {
    const { error } = await supabase.from("users").insert({
      name,
      email,
      phone,
      password: passwordCryptograpy,
    });

    if (error) {
      return Response.json(error);
    }

    return Response.json({ message: "Usuário cadastrado com sucesso!" });
  }
}
