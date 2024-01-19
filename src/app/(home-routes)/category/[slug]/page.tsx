import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import CategoryCard from "@/components/Surfaces/CategoryCard/CategoryCard";
import fetchCategories from "@/services/supabase/fetchCategories";
import fetchProducts from "@/services/supabase/fetchProducts";
import { TCategorie } from "@/types/categories";
import { TProduct } from "@/types/products";

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const dataProducts: TProduct[] = await fetchProducts();
  const dataCategories: TCategorie[] = await fetchCategories();

  const currentProductCategory = dataCategories.find(
    (categorie) => categorie.name === params.slug
  );
  const products: TProduct[] = dataProducts.filter(
    (product) => product.category_id === currentProductCategory?.id
  );

  return (
    <main className="relative flex-col-center justify-between h-[87vh] px-4">
      <ArrowBackToHome />

      <div className="flex flex-col px-2">
        <h1 className="mt-[73px] bb-title text-[32px] capitalize self-center">
          {params.slug}
        </h1>

        <ul
          className="
            self-end
             flex-col-center 
             gap-7 
             mt-9 
             
             tablet:flex-row 
             tablet:gap-20
             tablet:flex-wrap

             tablet:max-w-[620px]
             laptop:max-w-[980px]
          "
        >
          {products.map((product) => (
            <li key={product.id}>
              <CategoryCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
