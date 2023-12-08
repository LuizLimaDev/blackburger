"use client";

import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import { useContext } from "react";

export default function QtdCounter() {
  const { decreaseProductCounter, quantityCounter, increaseProductCounter } =
    useContext(CartContext);

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/icons/minus.svg"
          alt="diminuir quantidade"
          width={24}
          height={24}
          onClick={() => decreaseProductCounter()}
        />

        <p className="min-w-[30px] pb-1 text-center font-lilita text-[32px] drop-shadow-bb-2">
          {quantityCounter.toString().padStart(2, "0")}
        </p>

        <Image
          src="/icons/plus.svg"
          alt="aumentar quantidade"
          width={24}
          height={24}
          onClick={() => increaseProductCounter()}
        />
      </div>
    </>
  );
}
