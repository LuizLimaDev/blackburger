import HeaderHome from "@/components/DataDisplay/HeaderHome/HeaderHome";
import ProductsDisplay from "@/components/DataDisplay/ProductsDisplay/ProductsDisplay";
import MenuSlider from "@/components/Navigation/MenuSlider/MenuSlider";
import fetchProducts from "@/services/supabase/fetchProducts";
import { TProduct } from "@/types/products";

export default async function Home() {
  const productsList: TProduct[] = await fetchProducts();

  return (
    <main className="relative laptop:px-20">
      <HeaderHome />
      <MenuSlider />
      <ProductsDisplay productsList={productsList} />
    </main>
  );
}
