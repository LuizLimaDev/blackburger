export type IProduct = {
  id: number;
  img: string;
  name: string;
  description: string;
  price: number;
  category_id: number;
  favorite?: boolean;
};
