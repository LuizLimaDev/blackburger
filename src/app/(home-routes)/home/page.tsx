import HeaderHome from "@/components/DataDisplay/HeaderHome/HeaderHome";
import ProductsDisplay from "@/components/DataDisplay/ProductsDisplay/ProductsDisplay";
import MenuSlider from "@/components/Navigation/MenuSlider/MenuSlider";
import supabase from "@/services/supabase/supabase";
import { TProduct } from "@/types/products";

export default async function Home() {
  const { data } = await supabase.from("products").select();

  if (!data) {
    throw new Error("Nenhum produto cadastrado!");
  }

  const productsList: TProduct[] = await data;

  return (
    <main className="relative laptop:px-20">
      <HeaderHome />
      <MenuSlider />
      <ProductsDisplay productsList={productsList} />
    </main>
  );
}
