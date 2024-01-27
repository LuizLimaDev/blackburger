import { Dispatch, SetStateAction } from "react";
import { TProduct } from "./products";

export type TCartProduct = {
  quantity: number;
} & TProduct;

export type TCartContext = {
  productsOnCart: TCartProduct[];
  setProductsOnCart: Dispatch<SetStateAction<TCartProduct[]>>;
  currentProductId: number;
  setCurrentProductId: Dispatch<SetStateAction<number>>;
  quantityCounter: number;
  setQuantityCounter: Dispatch<SetStateAction<number>>;
  cartSubtotal: number;
  cartDiscount: number;
  tax: number;
  cartTotalPrice: number;
};
