"use server";

import supabase from "./supabase";

export default async function fetchProducts() {
  const { data } = await supabase.from("products").select();
  if (!data) {
    throw new Error("Nenhum produto cadastrado!");
  }
  return data;
}
