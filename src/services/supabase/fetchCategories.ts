import supabase from "./supabase";

export default async function fetchCategories() {
  const { data } = await supabase.from("products_categories").select();
  if (!data) {
    throw new Error("Nenhuma categoria de produto cadastrada!");
  }
  return data;
}
