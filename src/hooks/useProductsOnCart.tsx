import { CartContext } from "@/context/CartContext";
import { useContext, useEffect, useState } from "react";

export default function useProductsOnCart() {
  const { productsOnCart } = useContext(CartContext);
  const [numberOfProductsOnCart, setNumberOfProductsOnCart] =
    useState<number>(0);

  useEffect(() => {
    setNumberOfProductsOnCart(productsOnCart.length);
  }, [productsOnCart]);

  return numberOfProductsOnCart;
}
