import HeaderHome from "@/components/DataDisplay/HeaderHome/HeaderHome";

export default async function Home({
  productsCategories,
  productsList,
}: {
  productsCategories: React.ReactNode;
  productsList: React.ReactNode;
}) {
  return (
    <main className="relative laptop:px-20">
      <HeaderHome />
      {productsCategories}
      {productsList}
    </main>
  );
}
