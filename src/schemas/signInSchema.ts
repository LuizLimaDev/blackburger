import * as yup from "yup";

export const signInSchema = yup.object({
  email: yup
    .string()
    .email("Preencha corretamente o email por favor.")
    .required("Preencha o email por favor!"),
  password: yup
    .string()
    .min(5, "A senha deve conter no mín 5 caracteres!")
    .required("Preencha o password por favor!"),
});
