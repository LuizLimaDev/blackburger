"use client";

import { deliverySchema } from "@/schemas/deliverySchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import FormAlert from "../FormAlert/FormAlert";

interface IDeliveryData {
  cep: string;
  adress: string;
  number: number;
  complement?: string | undefined;
  cpf: number;
  phone: number;
  paymentMethod: string;
}

export default function DeliveryForm() {
  const {
    register,
    handleSubmit,
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
  };

  return (
    <>
      <form
        className="flex-col-center justify-center text-gray-bb-500"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* TODO - Trocar pelo input personalizado BB */}
        <input
          className="bb-input mb-2 h-[40px] w-[248px] pl-2"
          placeholder="cep"
          {...register("cep")}
        />
        <input
          className="bb-input mb-2 h-[40px] w-[248px] pl-2"
          placeholder="endereço"
          {...register("adress")}
        />
        <div className="flex gap-2">
          <input
            className="bb-input mb-2 h-[40px] w-[120px] pl-2"
            placeholder="número"
            {...register("number")}
          />
          <input
            className="bb-input mb-2 h-[40px] w-[120px] pl-2"
            placeholder="complemento"
            {...register("complement")}
          />
        </div>
        <input
          className="bb-input mb-2 h-[40px] w-[248px] pl-2"
          placeholder="cpf"
          {...register("cpf")}
        />
        <input
          className="bb-input mb-2 h-[40px] w-[248px] pl-2"
          placeholder="telefone"
          {...register("phone")}
        />

        <div
          className="
            relative flex h-[40px] w-[248px] justify-end rounded bg-gray-bb-100 drop-shadow-bb-2
          "
        >
          <select
            className="
              absolute 
              h-[40px] 
              w-full 
              pl-2 
              mb-2 

              appearance-none 
              bg-transparent 
              text-gray-bb-400 
              focus:outline-none
            "
            placeholder="tipo de pagamento"
            {...register("paymentMethod")}
          >
            <option value="">tipo de pagamento</option>
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
            className="w-4 h-[11px] mr-2"
          />
        </div>

        <div className="mt-4 max-h-[100px] overflow-y-scroll">
          {errors.cep?.message && <FormAlert alert={errors.cep?.message} />}
          {errors.adress?.message && (
            <FormAlert alert={errors.adress?.message} />
          )}
          {errors.number?.message && (
            <FormAlert alert={errors.number?.message} />
          )}
          {errors.cpf?.message && <FormAlert alert={errors.cpf?.message} />}
          {errors.phone?.message && <FormAlert alert={errors.phone?.message} />}
          {errors.paymentMethod?.message && (
            <FormAlert alert={errors.paymentMethod?.message} />
          )}
        </div>

        {/* TODO - Substitiuir pelo button BB */}
        <button
          className="bb-button w-full mb-10 mt-8  py-2 text-2xl"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </>
  );
}
