import Image from "next/image";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type TInputProps = {
  src: string;
  alt: string;
  type: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

export default function BBInput({
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
        width={0}
        height={0}
        sizes="100vw"
        className="w-6 h-6 m-2 drop-shadow-bb-1"
        aria-label="input icon"
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
