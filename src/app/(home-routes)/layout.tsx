import ToastContainers from "@/components/DataDisplay/Toasts/ToastContainers/ToastContainers";
import BottomNavigation from "@/components/Navigation/BottomNavigation/BottomNavigation";
import CartProvider from "@/context/CartContext";
import FavoriteProductsProvider from "@/context/FavoriteProducts";
import ProductsProvider from "@/context/ProductsContext";
import { authOptions } from "@/services/auth/authOptions";
import { IChildrenProps } from "@/types/children";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home({ children }: IChildrenProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <ProductsProvider>
        <FavoriteProductsProvider>
          <CartProvider>
            {children}
            <BottomNavigation />
            <ToastContainers />
          </CartProvider>
        </FavoriteProductsProvider>
      </ProductsProvider>
    </>
  );
}
