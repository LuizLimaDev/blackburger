import Image from "next/image";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type TProps = {
  alert: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

export default function FormAlert({ alert }: TProps) {
  const hookFormAlertMessage = String(alert);

  return (
    <div className="flex items-center justify-center gap-2">
      <Image
        src="/icons/warning.svg"
        alt="alerta"
        width={0}
        height={0}
        className="w-full h-5 max-h-[20px] max-w-[20px]"
      />
      <p className="text-red-bb-500 font-bold leading-4">
        {hookFormAlertMessage}
      </p>
    </div>
  );
}
