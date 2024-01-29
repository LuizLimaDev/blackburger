import priceConvert from "@/utils/priceConvert";
import { TProduct } from "@/types/products";
import FeaturedCard from "@/components/Surfaces/FeaturedCard/FeaturedCard";
import { memo } from "react";

type TProps = {
  products: TProduct[];
};

function FeaturingSlider({ products }: TProps) {
  const featuredProducts: TProduct[] = products.slice(-3);

  return (
    <>
      <ul
        className="
          flex
          justify-start
          items-center
          gap-10
          h-[100px]
          mt-11 
          
          
          overflow-auto
          no-scrollbar
          
          laptop:justify-center
          laptop:gap-4
          laptop:w-screen
          laptop:mt-20
        "
        aria-label="container-listItem"
      >
        {featuredProducts.map((product) => (
          <li key={product.id}>
            <FeaturedCard
              id={product.id}
              src={product.img}
              alt={product.name}
              productName={product.name}
              productPrice={priceConvert(product.price)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default memo(FeaturingSlider);
