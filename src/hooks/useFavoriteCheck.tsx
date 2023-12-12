"use client";

import { FavoriteProductsContext } from "@/context/FavoriteProducts";
import { ProductsContext } from "@/context/ProductsContext";
import { TProduct } from "@/types/products";
import { useContext, useEffect, useState } from "react";

export default function useFavoriteCheck(product: TProduct) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { favoritedProducts, addToFavorite, removeFromFavorite } = useContext(
    FavoriteProductsContext
  );
  const { setCurrentProductId } = useContext(ProductsContext);

  useEffect(() => {
    if (favoritedProducts.includes(product)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoritedProducts, setIsFavorite, product]);

  function handdleFavoriteProduct(currentProduct: TProduct, id: number) {
    if (isFavorite === false) {
      addToFavorite(currentProduct);
      return;
    }

    setCurrentProductId(id);
    removeFromFavorite(id);
  }

  return {
    isFavorite,
    handdleFavoriteProduct,
  };
}
