"use client";

import { TFavoritedProducts } from "@/types/favortes";
import { TProduct } from "@/types/products";
import { ReactNode, createContext, useState } from "react";

export const FavoriteProductsContext = createContext<TFavoritedProducts>({
  favoritedProducts: [],
  setFavoritedProducts: () => {},
  currentProduct: null,
  setCurrentProduct: () => {},
});

const FavoriteProductsProvider = ({ children }: { children: ReactNode }) => {
  const [favoritedProducts, setFavoritedProducts] = useState<TProduct[]>([]);
  const [currentProduct, setCurrentProduct] = useState<TProduct | null>(null);

  return (
    <FavoriteProductsContext.Provider
      value={{
        favoritedProducts,
        setFavoritedProducts,
        currentProduct,
        setCurrentProduct,
      }}
    >
      {children}
    </FavoriteProductsContext.Provider>
  );
};

export default FavoriteProductsProvider;
