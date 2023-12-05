import priceConvert from "@/utils/priceConvert";
import { IProduct } from "@/types/products";
import FeaturedCard from "@/components/Surfaces/FeaturedCard/FeaturedCard";

export default async function FeaturingSlider() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products: IProduct[] = await res.json();
  const featuredProducts: IProduct[] = products.slice(-3);
  // TODO - pegar os produtos do estado do contexto c favoritos

  return (
    <div className="no-scrollbar mt-11 flex h-[100px] justify-start gap-20 overflow-auto pl-6 xl:mt-20 xl:justify-center">
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
