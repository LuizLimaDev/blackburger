"use client";

import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import FavoritesCards from "@/components/Surfaces/FavoritesCards/FavoritesCards";
import { FavoriteProductsContext } from "@/context/FavoriteProducts";
import priceConvert from "@/utils/priceConvert";
import { useContext } from "react";

export default function Favorites() {
  const { favoritedProducts, removeFromFavorite } = useContext(
    FavoriteProductsContext
  );
  console.log(favoritedProducts);

  return (
    <main>
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
          {/* products list 2 column flex wrap in favoritesCard*/}
          {favoritedProducts.map((product) => (
            <FavoritesCards
              key={product.id}
              id={product.id}
              src={product.img}
              alt={product.name}
              name={product.name}
              price={priceConvert(product.price)}
              removeFromFavorite={removeFromFavorite}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
