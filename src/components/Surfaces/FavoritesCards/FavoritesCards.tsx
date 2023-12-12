"use client";

import { CartContext } from "@/context/CartContext";
import { IProduct } from "@/types/products";
import Image from "next/image";
import { useContext } from "react";
import priceConvert from "../../../utils/priceConvert";

type TProps = {
  product: IProduct;
  removeFromFavorite: (id: number) => void;
};

export default function FavoritesCards({
  product,
  removeFromFavorite,
}: TProps) {
  const { addProductToCart } = useContext(CartContext);

  const cartQuantityObject = {
    ...product,
    quantity: 1,
  };

  return (
    <>
      <div className="w-[140px] h-[217px] mt-11">
        <div className="flex-col-center relative w-[140px] h-[161px] rounded-3xl drop-shadow-bb-2 bg-gray-bb-400">
          <Image
            src={product.img}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="absolute top-[-50px] w-[122px] h-[98px] object-contain"
          />

          <h1
            className="
                w-[124px] 
                mt-[50px] 
                
                bb-title 
                text-2xl 
                text-center 
                capitalize 
                whitespace-nowrap 
                overflow-hidden 
                overflow-ellipsis
            "
          >
            {product.name}
          </h1>
          <p className="mt-1 drop-shadow-bb-1">
            R$ {priceConvert(product.price)}
          </p>

          <div className="flex justify-between w-full px-8 mt-3">
            <Image
              src="/icons/cart.svg"
              alt="carrinho"
              width={0}
              height={0}
              sizes="100vw"
              className="w-6 h-6 drop-shadow-bb-1 cursor-pointer"
              onClick={() => addProductToCart(cartQuantityObject)}
            />

            <Image
              src="/icons/favorite.svg"
              alt="favorito"
              width={0}
              height={0}
              sizes="100vw"
              className="w-6 h-6 drop-shadow-bb-1 cursor-pointer"
              onClick={() => removeFromFavorite(product.id)}
              // TODO - modal de confirmacao p retirar dos favoritos
            />
          </div>
        </div>
      </div>
    </>
  );
}
