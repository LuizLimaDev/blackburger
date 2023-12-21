import * as yup from "yup";

export const SignUpSchema = yup.object({
  name: yup
    .string()
    .min(6, "O nome precisa conter no min 6 caracteres!")
    .required("Preencha o campo nome por favor!"),
  email: yup
    .string()
    .email("Preencha corretamente o email por favor.")
    .required("Preencha o email por favor!"),
  phone: yup
    .string()
    .min(14, "O telefone precisa conter 11 digitos!")
    .required("Preencha o telefone por favor!"),
  password: yup
    .string()
    .min(6, "A senha deve conter no mín 6 caracteres!")
    .required("Preencha o password por favor!"),
});
