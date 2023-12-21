import { Dispatch, SetStateAction } from "react";
import { TProduct } from "./products";

export type CartProduct = {
  quantity: number;
} & TProduct;

export type TCartContext = {
  productsOnCart: CartProduct[];
  setProductsOnCart: Dispatch<SetStateAction<CartProduct[]>>;
  currentProductId: number;
  setCurrentProductId: Dispatch<SetStateAction<number>>;
  quantityCounter: number;
  setQuantityCounter: Dispatch<SetStateAction<number>>;
  cartSubtotal: number;
  cartDiscount: number;
  tax: number;
  cartTotalPrice: number;
};
