import FeaturingSlider from "@/components/Navigation/FeaturingSlider/FeaturingSlider";
import ProductCard from "@/components/Surfaces/ProductCard/ProductCard";
import supabase from "@/services/supabase/supabase";
import { TProduct } from "@/types/products";
import priceConvert from "@/utils/priceConvert";

export default async function ProductsDisplay() {
  const { data } = await supabase.from("products").select();

  if (!data) {
    throw new Error("Nenhum produto cadastrado!");
  }

  const products: TProduct[] = data;

  const oddProducts: TProduct[] = products.filter(
    (product) => product.id % 2 === 0
  );
  const evenProducts: TProduct[] = products.filter(
    (product) => product.id % 2 === 1
  );

  return (
    <>
      <FeaturingSlider products={products} />

      <div
        className="
          flex 
          justify-center 
          gap-6
          
          pt-16
          pb-5 
          mb-10 
        "
      >
        <ul
          id="columnLeft"
          className="
            flex-col-center 
            justify-start 
            gap-10 
            
            mt-14
            mb-10 

            tablet:flex-row
            tablet:flex-wrap
            tablet:justify-center
            tablet:max-w-[359px]
            tablet:mt-0
            laptop:hidden
          "
        >
          {oddProducts.map((product) => (
            <li
              key={product.id}
              className="
                flex-col-center 
                justify-start 
                
                h-[178px] 
                w-[40%]  
                mb-4 
                rounded-lg 
                  
                laptop:w-[180px]
              "
            >
              <ProductCard
                id={product.id}
                src={product.img}
                alt={product.name}
                productName={product.name}
                productPrice={priceConvert(product.price)}
              />
            </li>
          ))}
        </ul>

        <ul
          id="rightColumn"
          className="
            flex-col-center 
            justify-start 
            gap-10 
            
            mb-10 

            tablet:flex-row
            tablet:flex-wrap
            tablet:justify-center
            tablet:gap-8
            tablet:max-w-[359px]
            tablet:mt-0 
            laptop:hidden

          "
        >
          {evenProducts.map((product) => (
            <li
              key={product.id}
              className="
                flex-col-center 
                justify-start 
                
                h-[178px] 
                w-[40%]  
                mb-4 
                rounded-lg 
                  
                laptop:w-[180px]
              "
            >
              <ProductCard
                id={product.id}
                src={product.img}
                alt={product.name}
                productName={product.name}
                productPrice={priceConvert(product.price)}
              />
            </li>
          ))}
        </ul>

        <ul
          className="
            hidden 
            
            laptop:flex
            laptop:justify-center
            laptop:gap-6
            laptop:flex-wrap
            laptop:w-[80%]
          "
        >
          {products.map((product) => (
            <li
              key={product.id}
              className="
                flex-col-center 
                justify-start 
                
                h-[178px] 
                w-[40%]  
                mb-4 
                rounded-lg 
                  
                laptop:w-[180px]
              "
            >
              <ProductCard
                id={product.id}
                src={product.img}
                alt={product.name}
                productName={product.name}
                productPrice={priceConvert(product.price)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
