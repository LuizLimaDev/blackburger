"use client";

import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import FavoritesCards from "@/components/Surfaces/FavoritesCards/FavoritesCards";
import ModalRemoveFavorite from "@/components/Utils/ModalRemoveFavorite/ModalRemoveFavorite";
import { FavoriteProductsContext } from "@/context/FavoriteProducts";
import Image from "next/image";
import { useContext, useState } from "react";

export default function Favorites() {
  const { favoritedProducts } = useContext(FavoriteProductsContext);
  const [openModalRemoveFavorite, setOpenModalRemoveFavorite] = useState(false);

  return (
    <main className="relative">
      <ArrowBackToHome />

      <div className="flex-col-center px-6">
        <h1 className="mt-[72px] bb-title text-2xl capitalize tablet:text-[32px]">
          Favoritos
        </h1>

        <div
          className={`
            flex 
            ${
              favoritedProducts.length === 0
                ? "justify-center"
                : "justify-between flex-wrap"
            }
            
            w-full 
            mt-11 
            
            tablet:w-[80%] 
            tablet:mt-20
            laptop:w-[40%]
            `}
        >
          {favoritedProducts.map((product) => (
            <FavoritesCards
              key={product.id}
              product={product}
              setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
            />
          ))}

          {favoritedProducts.length === 0 && (
            <Image
              src="/ui/no-favorite.svg"
              alt="carrinho vazio"
              width={0}
              height={0}
              sizes="100vw"
              className="
                w-[200px] 
                h-[167px] 
                mt-[72px]
                
                drop-shadow-bb-white-shadow
                
                tablet:w-[300px]
                tablet:h-[267px] 
            "
            />
          )}
        </div>
      </div>

      <ModalRemoveFavorite
        openModalRemoveFavorite={openModalRemoveFavorite}
        setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
      />
    </main>
  );
}
