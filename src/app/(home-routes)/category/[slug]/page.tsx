import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import CategoryCard from "@/components/Surfaces/CategoryCard/CategoryCard";
import { TCategorie } from "@/types/categories";
import { IProduct } from "@/types/products";
import priceConvert from "../../../../utils/priceConvert";

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const resProducts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  const dataProducts: IProduct[] = await resProducts.json();

  const resCategories = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  const dataCategories: TCategorie[] = await resCategories.json();
  const currentProductCategory = dataCategories.find(
    (categorie) => categorie.name === params.slug
  );
  const products: IProduct[] = dataProducts.filter(
    (product) => product.category_id === currentProductCategory?.id
  );

  return (
    <main className="relative flex flex-col justify-between h-[87vh] px-4">
      <ArrowBackToHome />
      <div className="flex flex-col px-2">
        <h1 className="mt-[73px] bb-title text-[32px] capitalize self-center">
          {params.slug}
        </h1>

        <div className="self-end flex-col-center gap-7 mt-9">
          {products.map((product) => (
            <CategoryCard
              key={product.id}
              product={product}
              src={product.img}
              alt={product.name}
              name={product.name}
              description={product.description}
              price={priceConvert(product.price)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
