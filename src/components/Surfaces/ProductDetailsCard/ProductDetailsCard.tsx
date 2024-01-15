"use client";

import QtdCounter from "@/components/DataDisplay/QtdCounter/QtdCounter";
import Button from "@/components/Inputs/Button/Button";
import { CartContext } from "@/context/CartContext";
import useCart from "@/hooks/useCart";
import { TProduct } from "@/types/products";
import priceConvert from "@/utils/priceConvert";
import Image from "next/image";
import { useContext, useEffect } from "react";

type IProps = {
  id: number;
  product: TProduct;
  isBurger: boolean;
};

export default function ProductDetailsCard({ id, product, isBurger }: IProps) {
  const { quantityCounter, setQuantityCounter } = useContext(CartContext);
  const { addProductToCart } = useCart();

  useEffect(() => {
    setQuantityCounter(1);
  }, [id, setQuantityCounter]);

  function handleAddProductToCart(currentProduct: TProduct): void {
    addProductToCart({
      ...currentProduct,
      quantity: quantityCounter,
    });

    setQuantityCounter(1);
  }

  return (
    <>
      <div
        className={`
          flex-col-center
          pt-6

          ${isBurger && "bg-bb-burger-bg bg-[center_-4.5rem] bg-no-repeat"}

        `}
      >
        <Image
          src={product?.img}
          alt={product?.name}
          width={0}
          height={0}
          sizes="100vw"
          className="w-[304px] h-[250px] max-h-[300px] max-w-[70%] laptop:mt-10"
        />
      </div>

      <div className="laptop:mt-10 mt-2">
        <h1 className="bb-title text-[32px] capitalize pb-2">
          {product?.name}
        </h1>
        <p className="max-w-[450px] pb-8 text-sm tablet:text-base laptop:text-lg">
          {product?.description}
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

          tablet:max-w-[50%]

          laptop:mt-10
          laptop:w-[450px]
        "
      >
        <QtdCounter />

        <p className="bb-title text-[32px] self-center justify-self-center">
          R$ {priceConvert(product?.price)}
        </p>
      </div>

      <Button type="button" onClick={() => handleAddProductToCart(product)}>
        Adicionar
      </Button>
    </>
  );
}
