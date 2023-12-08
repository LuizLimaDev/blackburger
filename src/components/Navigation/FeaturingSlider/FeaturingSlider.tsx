import priceConvert from "@/utils/priceConvert";
import { IProduct } from "@/types/products";
import FeaturedCard from "@/components/Surfaces/FeaturedCard/FeaturedCard";

type TProps = {
  products: IProduct[];
};

export default async function FeaturingSlider({ products }: TProps) {
  const featuredProducts: IProduct[] = products.slice(-3);

  return (
    <div
      className="
          justify-start
          mt-11 flex
          h-[100px]
          pl-6
          gap-10
          
          overflow-auto
          no-scrollbar
          
          laptop:mt-20
          laptop:justify-center
          laptop:gap-4
        "
    >
      {featuredProducts.map((product) => (
        <FeaturedCard
          key={product.id}
          id={product.id}
          src={product.img}
          alt={product.name}
          productName={product.name}
          productPrice={priceConvert(product.price)}
        />
      ))}
    </div>
  );
}
