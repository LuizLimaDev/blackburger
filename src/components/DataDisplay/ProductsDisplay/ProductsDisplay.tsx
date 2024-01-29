import FeaturingSlider from "@/components/Navigation/FeaturingSlider/FeaturingSlider";
import ProductCard from "@/components/Surfaces/ProductCard/ProductCard";
import { TProduct } from "@/types/products";
import filterProductsById from "@/utils/filterProductsById";
import RenderProductList from "../RenderProductList/RenderProductList";
import { memo } from "react";

type TProps = {
  productsList: TProduct[];
};

function ProductsDisplay({ productsList }: TProps) {
  const products: TProduct[] = productsList;
  const oddProducts = 0;
  const evenProducts = 1;

  return (
    <>
      <FeaturingSlider products={products} />

      <div className="flex justify-center gap-6 pt-16 pb-5 mb-10">
        <ul className="columnMobile-dataDisplay" data-testid="columnLeft">
          {RenderProductList(filterProductsById(products, oddProducts))}
        </ul>

        <ul className="columnMobile-dataDisplay" data-testid="columRight">
          {RenderProductList(filterProductsById(products, evenProducts))}
        </ul>

        <ul className="columnLaptop-dataDisplay" data-testid="columLaptop">
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

export default memo(ProductsDisplay);
