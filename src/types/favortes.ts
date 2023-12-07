import { Dispatch, SetStateAction } from "react";
import { IProduct } from "./products";

export type IFavoritedProducts = {
  favoritedProducts: IProduct[];
  setFavoritedProducts: Dispatch<SetStateAction<IProduct[]>>;
  addToFavorite: (product: IProduct) => void;
  removeFromFavorite: (id: number) => void;
};
