import supabase from "@/services/supabase/supabase";
import { TCategorie } from "@/types/categories";
import Link from "next/link";

export default async function MenuSlider() {
  const { data } = await supabase.from("products_categories").select();

  if (!data) {
    throw new Error("Nenhuma categoria cadastrada!");
  }

  const categories: TCategorie[] = data;

  return (
    <div className="mx-4 mt-8 flex justify-center">
      <ul
        className="
        no-scrollbar flex gap-5 overflow-auto font-lilita text-gray-100 drop-shadow-bb-2 laptop:gap-40
        "
      >
        {categories.map((categorie) => (
          <Link key={categorie.id} href={`/category/${categorie.name}`}>
            {categorie.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
