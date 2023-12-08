"use client";

import { CartProduct, ICartContext } from "@/types/cart";
import { ReactNode, createContext, useState } from "react";

export const CartContext = createContext<ICartContext>({
  productsOnCart: [],
  setProductsOnCart: () => {},
  currentProductId: 0,
  setCurrentProductId: () => {},
  quantityCounter: 0,
  setQuantityCounter: () => {},
  decreaseProductCounter: () => {},
  increaseProductCounter: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  cartSubtotal: 0,
  cartDiscount: 0,
  tax: 0,
  cartTotalPrice: 0,
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [productsOnCart, setProductsOnCart] = useState<CartProduct[]>([]);
  const [quantityCounter, setQuantityCounter] = useState<number>(1);
  const [currentProductId, setCurrentProductId] = useState<number>(0);

  function decreaseProductCounter(product?: CartProduct): void {
    if (quantityCounter > 0) return setQuantityCounter((prev) => (prev -= 1));
    return;
  }

  function increaseProductCounter(product?: CartProduct): void {
    setQuantityCounter((prev) => (prev += 1));
  }

  // cart management
  function addProductToCart(product: CartProduct): void {
    const productOnCart = productsOnCart.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productOnCart) {
      setProductsOnCart((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        })
      );

      return;
    }

    setProductsOnCart((prev) => [...prev, product]);
  }

  function removeProductFromCart(id: number): void {
    const productOnCart = productsOnCart.find(
      (cartProduct) => cartProduct.id === id
    );

    if (!productOnCart) return;

    setProductsOnCart(productsOnCart.filter((products) => products.id !== id));
  }

  // Cart resume
  const cartSubtotal: number = productsOnCart.reduce((acc, product) => {
    return acc + Number(product.price * product.quantity);
  }, 0);
  const cartDiscount: number = 300;
  const tax: number = 350;
  const cartTotalPrice: number = cartSubtotal + tax - cartDiscount;

  // Cart qtd management
  function decreaseProductQuantity(product: CartProduct): void {
    const productOnCart = productsOnCart.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productOnCart && productOnCart.quantity > 0) {
      setProductsOnCart((prev) =>
        prev
          .map((cartProduct) => {
            if (cartProduct.id === product.id) {
              return {
                ...productOnCart,
                quantity: productOnCart.quantity - 1,
              };
            }

            return cartProduct;
          })
          .filter((cartProduct) => cartProduct.quantity > 0)
      );

      return;
    }
  }

  function increaseProductQuantity(product: CartProduct): void {
    const productOnCart = productsOnCart.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productOnCart && productOnCart.quantity > 0) {
      setProductsOnCart((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...productOnCart,
              quantity: productOnCart.quantity + 1,
            };
          }

          return cartProduct;
        })
      );

      return;
    }
  }

  return (
    <CartContext.Provider
      value={{
        productsOnCart,
        setProductsOnCart,
        currentProductId,
        setCurrentProductId,
        quantityCounter,
        setQuantityCounter,
        decreaseProductCounter,
        increaseProductCounter,
        addProductToCart,
        removeProductFromCart,
        cartSubtotal,
        cartDiscount,
        tax,
        cartTotalPrice,
        decreaseProductQuantity,
        increaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
