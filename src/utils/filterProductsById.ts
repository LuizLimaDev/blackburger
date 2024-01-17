import { TProduct } from "@/types/products";

const filterProductsById = (products: TProduct[], condition: number) => {
  return products.filter((product) => product.id % 2 === condition);
};

export default filterProductsById;
