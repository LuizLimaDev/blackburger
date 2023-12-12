"use client";

import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import FavoritesCards from "@/components/Surfaces/FavoritesCards/FavoritesCards";
import ModalRemoveFavorite from "@/components/Utils/ModalRemoveFavorite/ModalRemoveFavorite";
import { FavoriteProductsContext } from "@/context/FavoriteProducts";
import { useContext, useState } from "react";

export default function Favorites() {
  const { favoritedProducts } = useContext(FavoriteProductsContext);
  const [openModalRemoveFavorite, setOpenModalRemoveFavorite] = useState(false);

  return (
    <main className="relative">
      <ArrowBackToHome />

      <div className="flex-col-center mt-[72px] px-6">
        <h1 className="bb-title text-2xl capitalize">Favoritos</h1>

        <div
          className="
            flex 
            justify-between 
            flex-wrap 
            
            w-full 
            mt-11 
            
            tablet:w-[80%] 
            tablet:mt-20
            laptop:w-[40%]
            "
        >
          {favoritedProducts.map((product) => (
            <FavoritesCards
              key={product.id}
              product={product}
              setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
            />
          ))}
        </div>
      </div>

      <ModalRemoveFavorite
        openModalRemoveFavorite={openModalRemoveFavorite}
        setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
      />
    </main>
  );
}
