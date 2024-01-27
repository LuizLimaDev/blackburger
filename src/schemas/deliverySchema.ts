import * as yup from "yup";

export const deliverySchema = yup.object({
  cep: yup
    .string()
    .min(8, "O CEP deve conter 8 digitos!")
    .required("Preencha o campo CEP por favor!"),
  adress: yup.string().required("Preencha o endereço por favor!"),
  number: yup
    .number()
    .typeError("Preencha o número da residência!")
    .min(2, "O número deve conter ao menos 2 digitos!")
    .required("Preencha o número da residência!"),
  complement: yup.string(),
  cpf: yup
    .string()
    .typeError("O CPF deve conter no mín 11 caracteres!")
    .min(14, "O CPF deve conter no mín 11 caracteres!")
    .required("Preencha o CPF por favor!"),
  phone: yup
    .string()
    .typeError("Preencha o campo telefone com o DDD!")
    .min(14, "O telefone deve conter no mín 9 caracteres!")
    .required("Preencha o campo telefone com o DDD!"),
  payment_type: yup.string().required("Selecione um tipo de pagamento!"),
});
