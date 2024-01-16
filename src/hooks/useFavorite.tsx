"use client";

import { favoriteNotify } from "@/components/DataDisplay/Toasts/ToastContainers/ToastContainers";
import { FavoriteProductsContext } from "@/context/FavoriteProductsContext";
import { ProductsContext } from "@/context/ProductsContext";
import { TProduct } from "@/types/products";
import { useContext, useEffect, useState } from "react";

export default function useFavorite(product?: TProduct) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { favoritedProducts, setFavoritedProducts } = useContext(
    FavoriteProductsContext
  );
  const { setCurrentProductId } = useContext(ProductsContext);

  useEffect(() => {
    if (favoritedProducts.includes(product!)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoritedProducts, setIsFavorite, product]);

  function handdleFavoriteProduct(currentProduct: TProduct, id: number): void {
    if (isFavorite === false) {
      addToFavorite(currentProduct);
      return;
    }

    setCurrentProductId(id);
    removeFromFavorite(id);
  }

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

  return {
    isFavorite,
    handdleFavoriteProduct,
    addToFavorite,
    removeFromFavorite,
  };
}
