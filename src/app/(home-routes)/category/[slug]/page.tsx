import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import CategoryCard from "@/components/Surfaces/CategoryCard/CategoryCard";
import supabase from "@/services/supabase/supabase";
import { TCategorie } from "@/types/categories";
import { TProduct } from "@/types/products";

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  // products data
  const { data } = await supabase.from("products").select();

  if (!data) {
    throw new Error("Nenhum produto cadastrado!");
  }

  const dataProducts: TProduct[] = data;

  // categories data
  const response = await supabase.from("products_categories").select();

  if (!response.data) {
    throw new Error("Nenhuma categoria cadastrada!");
  }

  const dataCategories: TCategorie[] = response.data;

  // finding products by category
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

        <div
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
            <CategoryCard key={product.id} product={product} />
            // <CategoryCard
            //   key={product.id}
            //   product={product}
            //   src={product.img}
            //   alt={product.name}
            //   name={product.name}
            //   description={product.description}
            //   price={priceConvert(product.price)}
            // />
          ))}
        </div>
      </div>
    </main>
  );
}
