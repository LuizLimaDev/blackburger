"use client";

import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import ProductDetailsCard from "@/components/Surfaces/ProductDetailsCard/ProductDetailsCard";
import { ProductsContext } from "@/context/ProductsContext";
import { TProduct } from "@/types/products";
import { useContext } from "react";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { products } = useContext(ProductsContext);
  const id: number = Number(params.productId);
  const currentProduct: TProduct = products.find(
    (product) => product.id === id
  )!;

  const burgers: number[] = [1, 2, 3];
  const isBurger = burgers.some(
    (product) => currentProduct?.category_id === product
  );

  return (
    <main className="relative flex-col-center justify-between h-[87vh] px-4">
      <ArrowBackToHome />
      <ProductDetailsCard
        id={id}
        product={currentProduct}
        isBurger={isBurger}
      />
    </main>
  );
}
