"use client";

import { favoriteNotify } from "@/components/DataDisplay/Toasts/ToastContainers/ToastContainers";
import { TFavoritedProducts } from "@/types/favortes";
import { TProduct } from "@/types/products";
import { ReactNode, createContext, useState } from "react";

export const FavoriteProductsContext = createContext<TFavoritedProducts>({
  favoritedProducts: [],
  setFavoritedProducts: () => {},
  currentProduct: null,
  setCurrentProduct: () => {},
  addToFavorite: () => {},
  removeFromFavorite: () => {},
});

const FavoriteProductsProvider = ({ children }: { children: ReactNode }) => {
  const [favoritedProducts, setFavoritedProducts] = useState<TProduct[]>([]);
  const [currentProduct, setCurrentProduct] = useState<TProduct | null>(null);

  function addToFavorite(currentProduct: TProduct): void {
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
        currentProduct,
        setCurrentProduct,
        addToFavorite,
        removeFromFavorite,
      }}
    >
      {children}
    </FavoriteProductsContext.Provider>
  );
};

export default FavoriteProductsProvider;
