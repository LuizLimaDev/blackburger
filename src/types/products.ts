import { Dispatch, SetStateAction } from "react";

export type IProduct = {
  id: number;
  img: string;
  name: string;
  description: string;
  price: number;
  category_id: number;
  favorite?: boolean;
};

export type IProducts = {
  products: IProduct[];
  currentProductId: number;
  setCurrentProductId: Dispatch<SetStateAction<number>>;
};
