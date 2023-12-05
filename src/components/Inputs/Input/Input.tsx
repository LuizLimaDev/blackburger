import Image from "next/image";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type TInputProps = {
  src: string;
  alt: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  src,
  alt,
  type,
  placeholder,
  register,
}: TInputProps) {
  return (
    <div className="w-[296px] flex rounded bg-gray-bb-100 drop-shadow-bb-2">
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
        className="m-2 drop-shadow-bb-1"
      />

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="w-[83%] h-10 pl-2 pt-1 bg-gray-bb-100 outline-none text-gray-bb-500"
      />
    </div>
  );
}
