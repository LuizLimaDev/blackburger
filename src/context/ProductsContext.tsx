"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { IProduct, IProducts } from "@/types/products";

export const ProductsContext = createContext<IProducts>({
  products: [],
  currentProductId: 0,
  setCurrentProductId: () => {},
});

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentProductId, setCurrentProductId] = useState<number>(0);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
      const allProducts: IProduct[] = await res.json();

      const addingFavoriteStatus = allProducts.map((product) => {
        const productWithFavoriteStatus = {
          ...product,
          favorite: false,
        };

        return productWithFavoriteStatus;
      });

      setProducts(addingFavoriteStatus);
    }

    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        currentProductId,
        setCurrentProductId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
