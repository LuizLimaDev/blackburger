"use client";

import { FavoriteProductsContext } from "@/context/FavoriteProducts";
import { ProductsContext } from "@/context/ProductsContext";
import { IProduct } from "@/types/products";
import { useContext, useEffect, useState } from "react";

export default function useFavoriteCheck(product: IProduct) {
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

  function handdleFavoriteProduct(currentProduct: IProduct, id: number) {
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
