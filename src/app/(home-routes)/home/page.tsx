import HeaderHome from "@/components/DataDisplay/HeaderHome/HeaderHome";
import ProductsDisplay from "@/components/DataDisplay/ProductsDisplay/ProductsDisplay";
import MenuSlider from "@/components/Navigation/MenuSlider/MenuSlider";

export default function Home() {
  return (
    <main className="relative laptop:px-20">
      <HeaderHome />
      <MenuSlider />
      <ProductsDisplay />
    </main>
  );
}
