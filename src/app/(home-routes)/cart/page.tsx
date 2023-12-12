"use client";

import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import CartProductCard from "@/components/Surfaces/CartProductCard/CartProductCard";
import { CartContext } from "@/context/CartContext";
import priceConvert from "@/utils/priceConvert";
import Link from "next/link";
import { useContext } from "react";

export default function Cart() {
  const { productsOnCart, cartSubtotal, cartDiscount, tax, cartTotalPrice } =
    useContext(CartContext);

  return (
    <main className="relative flex h-screen flex-col items-center laptop:mx-40">
      <ArrowBackToHome />

      <h1 className="bb-title mt-10">Carrinho</h1>

      <div className="no-scrollbar h-[47%] overflow-y-scroll pb-6 tablet:h-[75%]">
        {productsOnCart.map((product) => (
          <div key={product.id} className="mt-4">
            <CartProductCard product={product} />
          </div>
        ))}
      </div>

      <div
        className="
        absolute bottom-12 h-[204px] w-full rounded-t-xl bg-gray-bb-100 px-6 laptop:w-[30%]
        "
      >
        <div className="mt-6 flex flex-col justify-center text-gray-bb-500">
          <ul>
            <li className="flex justify-between">
              <p>Sub-total</p>
              <p>R$ {priceConvert(cartSubtotal)}</p>
            </li>
            <li className="flex justify-between">
              <p>Taxa de entrega</p>
              <p>R$ {priceConvert(tax)}</p>
            </li>
            <li className="flex justify-between">
              <p>Desconto</p>
              <p>R$ {priceConvert(cartDiscount)}</p>
            </li>
          </ul>

          <div className="mt-3 flex justify-between border-t-2 border-gray-bb-300 py-3 text-base">
            <h6>Total</h6>
            <p>R$ {priceConvert(cartTotalPrice)}</p>
          </div>

          <Link href="/modaldelivery" className="bb-button h-[34px]">
            Finalizar Compra
          </Link>
        </div>
      </div>
    </main>
  );
}