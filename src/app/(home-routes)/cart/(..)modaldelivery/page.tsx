"use client";

import DeliveryForm, {
  TDeliveryData,
} from "@/components/Forms/DeliveryForm/DeliveryForm";
import { CartContext } from "@/context/CartContext";
import fetchOrder from "@/services/supabase/fetchOrder";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { SubmitHandler } from "react-hook-form";

export default function ModalDelivery() {
  const { productsOnCart, cartSubtotal, cartDiscount, tax, cartTotalPrice } =
    useContext(CartContext);
  const [orderSended, setOrderSended] = useState<boolean>(false);
  const router = useRouter();
  const { data: session } = useSession();

  const userEmail: string | undefined = session?.user.email;
  const orderPrices = {
    cartSubtotal,
    cartDiscount,
    tax,
    cartTotalPrice,
  };

  const onSubmit: SubmitHandler<TDeliveryData> = async (
    data: TDeliveryData
  ) => {
    const delivery_info = data;
    const order = await fetchOrder(
      userEmail,
      productsOnCart,
      delivery_info,
      orderPrices
    );
    router.push(order);
    setOrderSended(true);

    // optional redirect if not use whatsapp for send order
    // setTimeout(() => {
    //   router.push("/");
    // }, 2500);

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
