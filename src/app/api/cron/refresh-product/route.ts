import supabaseAdmin from "@/services/supabase/supabaseAdmin";

function isCronAuthorized(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!cronSecret) return false;

  return authHeader === `Bearer ${cronSecret}`;
}

export async function GET(request: Request) {
  if (!isCronAuthorized(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: firstProduct, error: fetchError } = await supabaseAdmin
    .from("products")
    .select("*")
    .order("id", { ascending: true })
    .limit(1)
    .single();

  if (fetchError || !firstProduct) {
    return Response.json(
      { error: "Could not fetch first product", details: fetchError?.message },
      { status: 500 },
    );
  }

  const { id, ...productPayload } = firstProduct;

  const { error: deleteError } = await supabaseAdmin
    .from("products")
    .delete()
    .eq("id", id);

  if (deleteError) {
    return Response.json(
      { error: "Could not delete product", details: deleteError.message },
      { status: 500 },
    );
  }

  const { data: recreatedProduct, error: insertError } = await supabaseAdmin
    .from("products")
    .insert(productPayload)
    .select("*")
    .single();

  if (insertError) {
    return Response.json(
      { error: "Could not recreate product", details: insertError.message },
      { status: 500 },
    );
  }

  return Response.json({
    message: "Product refreshed successfully",
    deletedProductId: id,
    recreatedProduct,
  });
}
