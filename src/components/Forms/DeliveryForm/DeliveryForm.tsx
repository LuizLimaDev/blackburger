"use client";

import OrderSended from "@/components/DataDisplay/OrderSended/OrderSended";
import FormAlert from "@/components/Forms/FormAlert/FormAlert";
import Button from "@/components/Inputs/Button/Button";
import { deliverySchema } from "@/schemas/deliverySchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";

interface IDeliveryData {
  cep: string;
  adress: string;
  number: number;
  complement?: string | undefined;
  cpf: string;
  phone: string;
  paymentMethod: string;
}

export default function DeliveryForm() {
  const [orderSended, setOrderSended] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cep: undefined,
      adress: undefined,
      number: undefined,
      complement: undefined,
      cpf: undefined,
      phone: undefined,
      paymentMethod: undefined,
    },
    resolver: yupResolver(deliverySchema),
  });

  const onSubmit: SubmitHandler<IDeliveryData> = async (
    data: IDeliveryData
  ) => {
    console.log(data);
    setOrderSended(true);

    setTimeout(() => {
      setOrderSended(false);
      router.push("/");
    }, 2500);
  };

  return (
    <>
      {orderSended ? (
        <OrderSended />
      ) : (
        <>
          <h1 className="bb-title text-2xl text-center capitalize mb-10">
            Dados de entrega
          </h1>

          <form
            className="flex-col-center justify-center gap-2 text-gray-bb-500"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              control={control}
              name="cep"
              rules={{
                required: "Preencha o CEP por favor!",
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <IMaskInput
                    type="text"
                    className="modal-input"
                    placeholder="cep"
                    mask="00000-000"
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
            />

            <input
              className="modal-input"
              placeholder="endereço"
              {...register("adress", { required: "Preencha a rua por favor!" })}
            />
            <div className="flex gap-2">
              <input
                className="modal-input w-[120px] tablet:w-[170px]"
                placeholder="número"
                {...register("number", {
                  required: "Preencha o número por favor!",
                })}
              />
              <input
                className="modal-input w-[120px] tablet:w-[170px]"
                placeholder="complemento"
                {...register("complement")}
              />
            </div>

            <Controller
              control={control}
              name="cpf"
              rules={{
                required: "Preencha o CPF por favor!",
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <IMaskInput
                    type="text"
                    className="modal-input"
                    placeholder="cpf"
                    mask="000.000.000-00"
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
            />

            <Controller
              control={control}
              name="phone"
              rules={{
                required: "Preencha o telefone por favor!",
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <IMaskInput
                    type="text"
                    className="modal-input"
                    placeholder="telefone"
                    mask="(00)00000-0000"
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
            />

            <div
              className="
                relative 
                flex 
                justify-end 
                
                h-[40px] 
                w-[248px] 
                rounded 
                drop-shadow-bb-2 
                
                bg-gray-bb-100 
                
                tablet:w-[348px]
              "
            >
              <select
                className="
              absolute 
              h-[40px] 
              w-full 
              pl-2 
              

              appearance-none 
              bg-transparent 
              text-gray-bb-500 
              focus:outline-none

              disabled:text-gray-bb-300
            "
                defaultValue="placeholder"
                {...register("paymentMethod")}
              >
                <option value="placeholder" disabled>
                  tipo de pagamento
                </option>
                <option value="Pix"> Pix </option>
                <option value="Crédito"> Crédito </option>
                <option value="Débito"> Débito </option>
              </select>
              <Image
                src="/icons/arrow-down-black.svg"
                alt="selecionar método de pagamento"
                width={0}
                height={0}
                sizes="100vw"
                className="w-4 h-[11px] mr-2 self-center"
              />
            </div>

            <div
              className={`
            ${
              errors.cep || errors.adress || errors.number
                ? "overflow-y-scroll"
                : ""
            }
            flex-col-center gap-3 pt-2 mt-4 max-h-[100px] 
            `}
            >
              {errors.cep?.message && <FormAlert alert={errors.cep?.message} />}
              {errors.adress?.message && (
                <FormAlert alert={errors.adress?.message} />
              )}
              {errors.number?.message && (
                <FormAlert alert={errors.number?.message} />
              )}
              {errors.cpf?.message && <FormAlert alert={errors.cpf?.message} />}
              {errors.phone?.message && (
                <FormAlert alert={errors.phone?.message} />
              )}
              {errors.paymentMethod?.message && (
                <FormAlert alert={errors.paymentMethod?.message} />
              )}
            </div>

            <Button
              className="bb-button w-full mb-10 mt-8  py-2 text-2xl"
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </>
      )}
    </>
  );
}
