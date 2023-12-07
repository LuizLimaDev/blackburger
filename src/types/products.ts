import { Dispatch, SetStateAction } from "react";

export type IProduct = {
  id: number;
  img: string;
  name: string;
  description: string;
  price: number;
  category_id: number;
};

export type IProducts = {
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  currentProductId: number;
  setCurrentProductId: Dispatch<SetStateAction<number>>;
};
