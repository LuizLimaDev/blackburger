import * as yup from "yup";

export const deliverySchema = yup.object({
  cep: yup
    .string()
    .min(8, "Preencha o CEP corretamente por favor!")
    .required("Preencha o campo CEP por favor!"),
  adress: yup.string().required("Preencha o endereço por favor!"),
  number: yup
    .number()
    .typeError("Preencha o número da residência!")
    .min(2, "Preencha o número da residência!")
    .required("Preencha o telefone por favor!"),
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
    .required(),
  paymentMethod: yup.string().required("Selecione um tipo de pagamento!"),
});
