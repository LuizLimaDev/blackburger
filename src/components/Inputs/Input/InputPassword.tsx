"use client";

import Image from "next/image";
import { InputHTMLAttributes, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type TInputProps = {
  register?: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputPassword({ register }: TInputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="relative w-[296px] flex rounded bg-gray-bb-100 drop-shadow-bb-2">
      <Image
        src="/icons/password.svg"
        alt="senha"
        width={0}
        height={0}
        sizes="100vw"
        className="w-6 h-6 m-2 drop-shadow-bb-1"
        aria-label="icon"
      />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="senha"
        className="w-[83%] h-10 pl-2 pt-1 bg-gray-bb-100 outline-none text-gray-bb-500"
        {...register}
      />

      <Image
        src={
          showPassword ? "/icons/password_show.svg" : "/icons/password_hide.svg"
        }
        alt="mostrar senha"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-6 h-6 m-auto top-0 right-3 bottom-0 drop-shadow-bb-1"
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  );
}
