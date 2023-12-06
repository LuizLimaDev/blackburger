import { Dispatch, SetStateAction } from "react";
import { IProduct } from "./products";

export type CartProduct = {
  quantity: number;
} & IProduct;

export type ICartContext = {
  productsOnCart: CartProduct[];
  cartSubtotal: number;
  tax: number;
  cartDiscount: number;
  cartTotalPrice: number;
  quantityCounter: number;
  setQuantityCounter: Dispatch<SetStateAction<number>>;
  addProductToCart: (product: CartProduct) => void;
  removeProductFromCart: (id: number) => void;
  decreaseProductQuantity: (product: CartProduct) => void;
  increaseProductQuantity: (product: CartProduct) => void;
};
