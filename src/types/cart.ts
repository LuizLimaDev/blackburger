import { Dispatch, SetStateAction } from "react";
import { IProduct } from "./products";

export type CartProduct = {
  quantity: number;
} & IProduct;

export type ICartContext = {
  productsOnCart: CartProduct[];
  setProductsOnCart: Dispatch<SetStateAction<CartProduct[]>>;
  currentProductId: number;
  setCurrentProductId: Dispatch<SetStateAction<number>>;
  quantityCounter: number;
  setQuantityCounter: Dispatch<SetStateAction<number>>;
  decreaseProductCounter: (product?: CartProduct) => void;
  increaseProductCounter: (product?: CartProduct) => void;
  addProductToCart: (product: CartProduct) => void;
  removeProductFromCart: (id: number) => void;
  cartSubtotal: number;
  cartDiscount: number;
  tax: number;
  cartTotalPrice: number;
  decreaseProductQuantity: (product: CartProduct) => void;
  increaseProductQuantity: (product: CartProduct) => void;
};
