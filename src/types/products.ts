import { Dispatch, SetStateAction } from "react";

export type TProduct = {
  id: number;
  img: string;
  name: string;
  description: string;
  price: number;
  category_id: number;
};

export type TProducts = {
  products: TProduct[];
  setProducts: Dispatch<SetStateAction<TProduct[]>>;
  currentProductId: number;
  setCurrentProductId: Dispatch<SetStateAction<number>>;
};
