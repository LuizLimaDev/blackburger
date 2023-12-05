import HeaderHome from "@/components/DataDisplay/HeaderHome/HeaderHome";
import ProductsDisplay from "@/components/DataDisplay/ProductsDisplay/ProductsDisplay";
import FeaturingSlider from "@/components/Navigation/FeaturingSlider/FeaturingSlider";
import MenuSlider from "@/components/Navigation/MenuSlider/MenuSlider";

export default function Home() {
  return (
    <div className="relative xl:px-20">
      <HeaderHome />
      <MenuSlider />
      <FeaturingSlider />
      <ProductsDisplay />
    </div>
  );
}
