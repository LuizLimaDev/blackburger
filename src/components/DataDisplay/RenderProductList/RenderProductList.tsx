import ProductCard from "@/components/Surfaces/ProductCard/ProductCard";
import { TProduct } from "@/types/products";

export default function RenderProductList(products: TProduct[]) {
  return (
    <ul
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
  );
}
