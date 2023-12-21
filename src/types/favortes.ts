import { Dispatch, SetStateAction } from "react";
import { TProduct } from "./products";

export type TFavoritedProducts = {
  favoritedProducts: TProduct[];
  setFavoritedProducts: Dispatch<SetStateAction<TProduct[]>>;
  currentProduct: TProduct | null;
  setCurrentProduct: Dispatch<SetStateAction<TProduct | null>>;
};
