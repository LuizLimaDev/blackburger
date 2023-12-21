"use client";

import { addedOnCartNotify } from "@/components/DataDisplay/Toasts/ToastContainers/ToastContainers";
import { CartContext } from "@/context/CartContext";
import { CartProduct } from "@/types/cart";
import { useContext } from "react";

export default function useCart() {
  const {
    productsOnCart,
    setProductsOnCart,
    quantityCounter,
    setQuantityCounter,
  } = useContext(CartContext);

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
    addedOnCartNotify();
  }

  function removeProductFromCart(id: number): void {
    const productOnCart = productsOnCart.find(
      (cartProduct) => cartProduct.id === id
    );

    if (!productOnCart) return;

    setProductsOnCart(productsOnCart.filter((products) => products.id !== id));
  }

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

  return {
    decreaseProductCounter,
    increaseProductCounter,
    addProductToCart,
    removeProductFromCart,
    decreaseProductQuantity,
    increaseProductQuantity,
  };
}
