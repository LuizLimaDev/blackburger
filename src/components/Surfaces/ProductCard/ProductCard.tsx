"use client";

import { ProductsContext } from "@/context/ProductsContext";
import useFavoriteCheck from "@/hooks/useFavorite";
import { TProduct } from "@/types/products";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
interface TProductCardProps {
  id: number;
  src: string;
  alt: string;
  productName: string;
  productPrice: string;
}

export default function ProductCard({
  id,
  src,
  alt,
  productName,
  productPrice,
}: TProductCardProps) {
  const { products } = useContext(ProductsContext);
  const router = useRouter();

  const currentProduct: TProduct = products.filter(
    (product) => product.id === id
  )[0];

  const { handdleFavoriteProduct, isFavorite } =
    useFavoriteCheck(currentProduct);

  return (
    <div
      className="
        flex-col-center 
        justify-start 
        
        h-[178px] 
        w-[40%]  
        mb-4 
        rounded-lg 
          
        laptop:w-[180px]
      "
    >
      <div>
        <div
          className="
            relative flex h-[121px] w-[132px] items-center justify-center 
            rounded-[25px] bg-gray-bb-400
          "
        >
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
            className="h-[85%] w-[85%] cursor-pointer object-contain"
            onClick={() => router.push(`/product/${id}`)}
            priority={true}
          />
          <Image
            src={isFavorite ? "/icons/favorite.svg" : "/icons/not-favorite.svg"}
            alt={isFavorite ? "favorito" : "item não favoritado"}
            width={32}
            height={32}
            className="absolute bottom-[-12px] right-[-12px] z-10 cursor-pointer"
            onClick={() => handdleFavoriteProduct(currentProduct, id)}
          />
        </div>

        <div
          className="flex-col-center cursor-pointer p-2"
          onClick={() => router.push(`/product/${id}`)}
        >
          <h5
            className="
              max-w-[132px]
              mb-2 

              text-center 
              font-lilita 
              text-2xl 
              leading-none 
              text-yellow-bb-300 
              drop-shadow-bb-2
            "
          >
            {productName}
          </h5>
          <p className="text-base drop-shadow-bb-2">R$ {productPrice}</p>
        </div>
      </div>
    </div>
  );
}
