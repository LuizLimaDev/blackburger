"use client";

import { favoriteNotify } from "@/components/DataDisplay/Toasts/ToastContainers/ToastContainers";
import { FavoriteProductsContext } from "@/context/FavoriteProducts";
import { ProductsContext } from "@/context/ProductsContext";
import { IProduct } from "@/types/products";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
interface IProductCardProps {
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
}: IProductCardProps) {
  const { favoritedProducts, addToFavorite, removeFromFavorite } = useContext(
    FavoriteProductsContext
  );
  const { products, setCurrentProductId } = useContext(ProductsContext);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const router = useRouter();

  const currentProduct: IProduct = products.filter(
    (product) => product.id === id
  )[0];

  useEffect(() => {
    if (favoritedProducts.includes(currentProduct)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoritedProducts, setIsFavorite, currentProduct]);

  function handdleFavoriteProduct(currentProduct: IProduct, id: number) {
    if (isFavorite === false) {
      favoriteNotify();
      addToFavorite(currentProduct);
      return;
    }

    setCurrentProductId(id);
    removeFromFavorite(id);
  }

  return (
    <div className="mb-4 flex-col-center h-[178px] w-[40%]  justify-start rounded-lg">
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
            className="absolute bottom-[-12px] right-[-12px] z-10"
            onClick={() => handdleFavoriteProduct(currentProduct, id)}
          />
        </div>

        <div
          className="flex-col-center cursor-pointer p-2"
          onClick={() => router.push(`/product/${id}`)}
        >
          <h5
            className="
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
