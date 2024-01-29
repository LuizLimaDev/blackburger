import fetchCategories from "@/services/supabase/fetchCategories";
import { TCategorie } from "@/types/categories";
import Link from "next/link";
import { memo } from "react";

async function MenuSlider() {
  const categories: TCategorie[] = await fetchCategories();

  return (
    <div className="px-4 mt-8">
      <ul
        className="
          no-scrollbar 
          flex 
          justify-start
          gap-5 
          overflow-auto
          drop-shadow-bb-2 
          
          font-lilita 
          text-gray-100 
          
          tablet:gap-20
          tablet:justify-center
          laptop:gap-40
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

export default memo(MenuSlider);
