"use client";

import { TCartProduct, TCartContext } from "@/types/cart";
import { ReactNode, createContext, useState } from "react";

export const CartContext = createContext<TCartContext>({
  productsOnCart: [],
  setProductsOnCart: () => {},
  currentProductId: 0,
  setCurrentProductId: () => {},
  quantityCounter: 0,
  setQuantityCounter: () => {},
  cartSubtotal: 0,
  cartDiscount: 0,
  tax: 0,
  cartTotalPrice: 0,
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [productsOnCart, setProductsOnCart] = useState<TCartProduct[]>([]);
  const [quantityCounter, setQuantityCounter] = useState<number>(1);
  const [currentProductId, setCurrentProductId] = useState<number>(0);

  const cartSubtotal: number = productsOnCart.reduce((acc, product) => {
    return acc + Number(product.price * product.quantity);
  }, 0);
  const cartDiscount: number = 300;
  const tax: number = 350;
  const cartTotalPrice: number = cartSubtotal + tax - cartDiscount;

  return (
    <CartContext.Provider
      value={{
        productsOnCart,
        setProductsOnCart,
        currentProductId,
        setCurrentProductId,
        quantityCounter,
        setQuantityCounter,
        cartSubtotal,
        cartDiscount,
        tax,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
