"use client";

import DeliveryForm, {
  TDeliveryData,
} from "@/components/Forms/DeliveryForm/DeliveryForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

export default function ModalDelivery() {
  const [orderSended, setOrderSended] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<TDeliveryData> = async (
    data: TDeliveryData
  ) => {
    console.log(data);
    setOrderSended(true);

    setTimeout(() => {
      router.push("/");
    }, 2500);

    setTimeout(() => {
      setOrderSended(false);
    }, 2600);
  };

  return (
    <>
      <div className="modal-shade z-50">
        <div
          className="
            fixed 
            flex-col-center 
            
            w-[320px] 
            rounded-lg 
            drop-shadow-bb-4
            
            bg-gray-bb-300 

            tablet:w-[50vw]
            laptop:w-[28vw]
          "
        >
          <Link
            href="/cart"
            className="mr-4 mt-4 self-end font-lilita text-base text-gray-bb-400"
          >
            X
          </Link>

          <div className="px-[34px]">
            <DeliveryForm onSubmit={onSubmit} orderSended={orderSended} />
          </div>
        </div>
      </div>
    </>
  );
}
