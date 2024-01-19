"use client";

import fetchProducts from "@/services/supabase/fetchProducts";
import { TProduct, TProducts } from "@/types/products";
import { ReactNode, createContext, useEffect, useState } from "react";

export const ProductsContext = createContext<TProducts>({
  products: [],
  setProducts: () => {},
  currentProductId: 0,
  setCurrentProductId: () => {},
});

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [currentProductId, setCurrentProductId] = useState<number>(0);

  useEffect(() => {
    async function getProducts() {
      const allProducts: TProduct[] = await fetchProducts();

      setProducts(allProducts);
    }

    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        currentProductId,
        setCurrentProductId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
