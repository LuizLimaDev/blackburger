import ProductsDisplay from "@/components/DataDisplay/ProductsDisplay/ProductsDisplay";
import fetchProducts from "@/services/supabase/fetchProducts";
import { TProduct } from "@/types/products";

export default async function products() {
  const productsList: TProduct[] = await fetchProducts();

  return (
    <>
      <ProductsDisplay productsList={productsList} />
    </>
  );
}
