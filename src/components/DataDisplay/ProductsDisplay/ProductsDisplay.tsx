import FeaturingSlider from "@/components/Navigation/FeaturingSlider/FeaturingSlider";
import ProductCard from "@/components/Surfaces/ProductCard/ProductCard";
import fetchProducts from "@/services/supabase/fetchProducts";
import { TProduct } from "@/types/products";
import filterProductsById from "@/utils/filterProductsById";
import RenderProductList from "../RenderProductList/RenderProductList";

export default async function ProductsDisplay() {
  const products: TProduct[] = await fetchProducts();

  const oddProducts = 0;
  const evenProducts = 1;

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
        {RenderProductList(filterProductsById(products, oddProducts))}
        {RenderProductList(filterProductsById(products, evenProducts))}

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
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
