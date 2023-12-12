import * as yup from "yup";

export const SignUpSchema = yup.object({
  name: yup
    .string()
    .min(6, "Preencha nome e sobrenome por favor!")
    .required("Preencha o campo nome por favor!"),
  email: yup
    .string()
    .email("Preencha corretamente o email por favor.")
    .required("Preencha o email por favor!"),
  phone: yup
    .string()
    .min(14, "Preencha o campo telefone com o DDD!")
    .required("Preencha o telefone por favor!"),
  password: yup
    .string()
    .min(6, "A senha deve conter no mín 6 caracteres!")
    .required("Preencha o password por favor!"),
});
