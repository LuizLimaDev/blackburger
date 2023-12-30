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
        sizes="100vw"
        className="w-6 h-5 max-h-[20px] max-w-[20px]"
        aria-label="alert-img"
      />
      <p
        className="text-red-bb-500 font-bold leading-4"
        aria-label="alert message"
      >
        {hookFormAlertMessage}
      </p>
    </div>
  );
}
