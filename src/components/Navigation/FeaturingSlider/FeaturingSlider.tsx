import priceConvert from "@/utils/priceConvert";
import { TProduct } from "@/types/products";
import FeaturedCard from "@/components/Surfaces/FeaturedCard/FeaturedCard";

type TProps = {
  products: TProduct[];
};

export default async function FeaturingSlider({ products }: TProps) {
  const featuredProducts: TProduct[] = products.slice(-3);

  return (
    <>
      <ul
        className="
          justify-start
          items-center
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
