import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import ProductDetailsCard from "@/components/Surfaces/ProductDetailsCard/ProductDetailsCard";
import fetchProducts from "@/services/supabase/fetchProducts";
import { TProduct } from "@/types/products";
import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const products = await fetchProducts();
  const id: number = Number(params.productId);
  const currentProduct: TProduct = products.find(
    (product) => product.id === id
  )!;

  if (!currentProduct) return notFound();

  const burgers: number[] = [1, 2, 3];
  const isBurger = burgers.some(
    (product) => currentProduct?.category_id === product
  );

  return (
    <main className="relative flex-col-center justify-between h-[87vh] px-4">
      <ArrowBackToHome />
      <ProductDetailsCard
        id={id}
        product={currentProduct}
        isBurger={isBurger}
      />
    </main>
  );
}
