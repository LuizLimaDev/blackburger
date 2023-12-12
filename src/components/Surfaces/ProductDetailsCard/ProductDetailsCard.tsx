"use client";

import QtdCounter from "@/components/DataDisplay/QtdCounter/QtdCounter";
import { contextClass } from "@/components/DataDisplay/Toasts/ContextClass";
import { addedOnCartNotify } from "@/components/DataDisplay/Toasts/ToastContainers/ToastContainers";
import Button from "@/components/Inputs/Button/Button";
import { CartContext } from "@/context/CartContext";
import { ProductsContext } from "@/context/ProductsContext";
import { IProduct } from "@/types/products";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";

type IProps = {
  params: {
    productId: string;
  };
};

export default function ProductDetailsCard({ params }: IProps) {
  const { products } = useContext(ProductsContext);
  const { quantityCounter, setQuantityCounter, addProductToCart } =
    useContext(CartContext);
  const id: number = Number(params.productId);

  useEffect(() => {
    setQuantityCounter(1);
  }, [id, setQuantityCounter]);

  const currentProduct: IProduct = products.find(
    (product) => product.id === id
  )!;

  const isBurger = currentProduct?.category_id === 1;

  function handleAddProductToCart(currentProduct: IProduct): void {
    addedOnCartNotify();

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
        <p className="max-w-[450px] pb-8 text-sm tablet:text-base laptop:text-lg">
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

          tablet:max-w-[50%]

          laptop:mt-10
          laptop:w-[450px]
        "
      >
        <QtdCounter />

        <p className="bb-title text-[32px] self-center justify-self-center">
          R$ {(currentProduct?.price! / 100).toFixed(2)}
        </p>
      </div>

      <Button
        type="button"
        onClick={() => handleAddProductToCart(currentProduct)}
      >
        Adicionar
      </Button>

      {/* <ToastContainer
        enableMultiContainer
        containerId={"cart"}
        position="bottom-center"
        limit={2}
        hideProgressBar
        icon={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover={false}
        // closeButton={<ToastUndoAddedToCart undo={undoProductAddedToCart} />}
        toastClassName={({ type }: any) =>
          contextClass[type || "default"] +
          " absolute flex w-full bottom-8 p-1 mb-[48px] min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "flex"}
      /> */}
    </>
  );
}