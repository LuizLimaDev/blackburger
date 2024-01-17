import ProductCard from "@/components/Surfaces/ProductCard/ProductCard";
import { TProduct } from "@/types/products";

export default function RenderProductList(products: TProduct[]) {
  return (
    <>
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
    </>
  );
}
