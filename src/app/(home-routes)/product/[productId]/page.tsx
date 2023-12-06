"use client";

import Button from "@/components/Inputs/Button/Button";
import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import { ProductsContext } from "@/context/ProductsContext";
import { IProduct } from "@/types/products";
import Image from "next/image";
import { useContext, useState } from "react";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { products } = useContext(ProductsContext);
  const [quantityCounter, setQuantityCounter] = useState<number>(1);
  const id: number = Number(params.productId);

  const currentProduct: IProduct | undefined = products.find(
    (product) => product.id === id
  );

  const isBurger = currentProduct?.category_id === 1;

  function handleDecreaseQtd() {
    if (quantityCounter > 0) return setQuantityCounter((prev) => prev - 1);
    return;
  }

  function handleIncreaseQtd() {
    setQuantityCounter((prev) => prev + 1);
  }

  return (
    <main className="relative flex flex-col items-center justify-center px-4">
      <ArrowBackToHome />
      <div
        className={`
          flex-col-center
          pt-6

          ${isBurger && "bg-bb-burger-bg bg-[center_-4.5rem] bg-no-repeat"}

        `}
      >
        <Image
          src={currentProduct?.img!}
          alt={currentProduct?.name!}
          width={0}
          height={0}
          sizes="100vw"
          className="w-[304px] h-[250px] max-h-[300px] max-w-[70%] laptop:mt-10"
        />
      </div>

      <div className="laptop:mt-10 mt-2">
        <h1 className="bb-title text-[32px] capitalize pb-2">
          {currentProduct?.name}
        </h1>
        <p className="max-w-[450px] pb-8 text-sm">
          {currentProduct?.description}
        </p>
      </div>

      <div
        className="
          flex 
          w-full 
          justify-between 
          gap-12 
          self-center
          
          justify-self-center  
          px-4
          pb-10 
          
          font-lilita

          laptop:mt-10
          laptop:w-[450px]
        "
      >
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/icons/minus.svg"
            alt="diminuir quantidade"
            width={24}
            height={24}
            onClick={() => handleDecreaseQtd()}
          />

          <p className="min-w-[30px] pb-1 text-center font-lilita text-[32px] drop-shadow-bb-2">
            {quantityCounter.toString().padStart(2, "0")}
          </p>

          <Image
            src="/icons/plus.svg"
            alt="aumentar quantidade"
            width={24}
            height={24}
            onClick={() => handleIncreaseQtd()}
          />
        </div>

        <p className="bb-title text-[32px] self-center justify-self-center">
          R$ {(currentProduct?.price! / 100).toFixed(2)}
        </p>
      </div>

      <Button type="button">Adicionar</Button>
    </main>
  );
}
