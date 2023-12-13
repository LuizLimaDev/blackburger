import { TCategorie } from "@/types/categories";
import Link from "next/link";

export default async function MenuSlider() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/categories`);
  const { data } = await res.json();
  const categories: TCategorie[] = data;

  return (
    <div className="mx-4 mt-8 flex justify-center">
      <ul
        className="
        no-scrollbar flex gap-5 overflow-auto font-lilita text-gray-100 drop-shadow-bb-2 laptop:gap-40
        "
      >
        {categories.map((categorie: TCategorie) => (
          <Link key={categorie.id} href={`/category/${categorie.name}`}>
            {categorie.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
