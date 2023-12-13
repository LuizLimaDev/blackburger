import Button from "@/components/Inputs/Button/Button";
import FeaturingSlider from "@/components/Navigation/FeaturingSlider/FeaturingSlider";
import ProductCard from "@/components/Surfaces/ProductCard/ProductCard";
import { TProduct } from "@/types/products";
import priceConvert from "@/utils/priceConvert";

export default async function ProductsDisplay() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/products`);
  const { data } = await res.json();
  const products: TProduct[] = data;

  const oddProducts: TProduct[] = products.filter(
    (product: TProduct) => product.id % 2 === 0
  );
  const evenProducts: TProduct[] = products.filter(
    (product: TProduct) => product.id % 2 === 1
  );

  return (
    <>
      <FeaturingSlider products={products} />

      <div
        className="
          mb-10 
          mt-11 
          flex 
          justify-center 
          px-5 
          
          laptop:mt-40 
          laptop:flex-col-center
        "
      >
        <div
          id="columnLeft"
          className="
            flex-col-center 
            justify-start 
            gap-10 
            
            mb-10 

            laptop:relative 
            laptop:flex-row
          "
        >
          <Button
            type="button"
            className="
              flex 
              items-center 
              justify-center 
              w-[74px] 
              h-8 
              text-base

              laptop:absolute 
              laptop:top-[-54px] 
              laptop:left-10
            "
          >
            Filtrar
          </Button>

          {oddProducts.map((product: TProduct) => (
            <ProductCard
              key={product.id}
              id={product.id}
              src={product.img}
              alt={product.name}
              productName={product.name}
              productPrice={priceConvert(product.price)}
            />
          ))}
        </div>

        <div
          id="rightColumn"
          className="
            flex-col-center justify-start gap-10 pl-7 mb-10 laptop:flex-row laptop:pl-7
          "
        >
          {evenProducts.map((product: TProduct) => (
            <ProductCard
              key={product.id}
              id={product.id}
              src={product.img}
              alt={product.name}
              productName={product.name}
              productPrice={priceConvert(product.price)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
