"use client";

import { CartContext } from "@/context/CartContext";
import { ProductsContext } from "@/context/ProductsContext";
import useFavoriteCheck from "@/hooks/useFavoriteCheck";
import { IProduct } from "@/types/products";
import Image from "next/image";
import { useContext } from "react";

type TProps = {
  product: IProduct;
  src: string;
  alt: string;
  name: string;
  description: string;
  price: string;
};

export default function CategoryCard({
  product,
  src,
  alt,
  name,
  description,
  price,
}: TProps) {
  const { products } = useContext(ProductsContext);
  const { addProductToCart } = useContext(CartContext);

  const currentProduct: IProduct = products.filter(
    (allProduct) => allProduct.id === product.id
  )[0];

  const { handdleFavoriteProduct, isFavorite } =
    useFavoriteCheck(currentProduct);

  const productQuantity = {
    ...product,
    quantity: 1,
  };

  return (
    <>
      <div
        className="
            flex-col-center

            relative 
            w-[269px] 
            h-[172px] 
            rounded-3xl 
            drop-shadow-bb-4 
            
            bg-gray-bb-400  
        "
      >
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-5 left-[-50px] w-full h-full max-w-[103px] max-h-[98px]"
        />

        <div className="max-w-[150px] ml-[94px]">
          <h1 className="mt-4 bb-title text-2xl capitalize whitespace-nowrap overflow-hidden text-ellipsis">
            {name}
          </h1>
          <p
            className="
                max-w-[160px] 
                max-h-[68px] 
                mt-2
                
                whitespace-wrap  
                overflow-hidden 
                text-ellipsis
            "
          >
            {description}
          </p>
        </div>

        <div className="flex justify-between w-[216px] mt-4">
          <Image
            src="/icons/cart.svg"
            alt="adicionar ao carrinho"
            width={0}
            height={0}
            sizes="100vw"
            className="w-6 h-6 drop-shadow-bb-1 cursor-pointer"
            onClick={() => addProductToCart(productQuantity)}
          />

          <Image
            src={isFavorite ? "/icons/favorite.svg" : "/icons/not-favorite.svg"}
            alt={isFavorite ? "favorito" : "item não favoritado"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-6 h-6 drop-shadow-bb-1 cursor-pointer"
            onClick={() => handdleFavoriteProduct(currentProduct, product.id)}
          />

          <span className="drop-shadow-bb-1">{price}</span>
        </div>
      </div>
    </>
  );
}
