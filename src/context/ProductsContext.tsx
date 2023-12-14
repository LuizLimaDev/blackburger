"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { TProduct, TProducts } from "@/types/products";
import supabase from "@/services/supabase/supabase";

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
      const { data } = await supabase.from("products").select();

      if (!data) {
        throw new Error("Nenhum produto cadastrado!");
      }

      const allProducts: TProduct[] = data;

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
