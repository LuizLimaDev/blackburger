import fetchCategories from "@/services/supabase/fetchCategories";
import { TCategorie } from "@/types/categories";
import Link from "next/link";

export default async function MenuSlider() {
  const categories: TCategorie[] = await fetchCategories();

  return (
    <div className="mx-4 mt-8 flex justify-center">
      <ul
        className="
        no-scrollbar flex gap-5 overflow-auto font-lilita text-gray-100 drop-shadow-bb-2 laptop:gap-40
        "
      >
        {categories.map((categorie) => (
          <li key={categorie.id}>
            <Link href={`/category/${categorie.name}`}>{categorie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
