import ToastContainers from "@/components/DataDisplay/Toasts/ToastContainers/ToastContainers";
import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import ProductDetailsCard from "@/components/Surfaces/ProductDetailsCard/ProductDetailsCard";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <main className="relative flex-col-center justify-between h-[87vh] px-4">
      <ArrowBackToHome />
      <ProductDetailsCard params={params} />
    </main>
  );
}
