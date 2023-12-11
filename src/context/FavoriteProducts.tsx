"use client";

import { favoriteNotify } from "@/components/DataDisplay/Toasts/ToastContainers/ToastContainers";
import { IFavoritedProducts } from "@/types/favortes";
import { IProduct } from "@/types/products";
import { ReactNode, createContext, useState } from "react";

export const FavoriteProductsContext = createContext<IFavoritedProducts>({
  favoritedProducts: [],
  setFavoritedProducts: () => {},
  addToFavorite: () => {},
  removeFromFavorite: () => {},
});

const FavoriteProductsProvider = ({ children }: { children: ReactNode }) => {
  const [favoritedProducts, setFavoritedProducts] = useState<IProduct[]>([]);

  function addToFavorite(currentProduct: IProduct): void {
    const isFavorite = favoritedProducts.find(
      (product) => currentProduct.id === product.id
    );

    if (!isFavorite) {
      setFavoritedProducts((prev) => [...prev, currentProduct]);
      favoriteNotify();
    }
  }

  function removeFromFavorite(id: number): void {
    const removeProductFromFavorite = favoritedProducts.filter(
      (product) => product.id !== id
    );

    setFavoritedProducts(removeProductFromFavorite);
  }

  return (
    <FavoriteProductsContext.Provider
      value={{
        favoritedProducts,
        setFavoritedProducts,
        addToFavorite,
        removeFromFavorite,
      }}
    >
      {children}
    </FavoriteProductsContext.Provider>
  );
};

export default FavoriteProductsProvider;
