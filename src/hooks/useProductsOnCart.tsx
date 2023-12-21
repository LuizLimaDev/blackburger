import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export default function useProductsOnCart() {
  const { productsOnCart } = useContext(CartContext);

  const numberOfProductsOnCart: number = productsOnCart.length;

  return numberOfProductsOnCart;
}
