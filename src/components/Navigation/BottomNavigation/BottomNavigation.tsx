import Image from "next/image";
import Link from "next/link";
import UserButtonNavigation from "./UserButtonNavigation/UserButtonNavigation";
import CartBadge from "@/components/DataDisplay/CartBadge/CartBadge";

export default function BottomNavigation() {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-40 h-12 w-full border-t border-gray-bb-500 bg-gray-bb-500">
        <div className="mx-auto flex px-10 h-full max-w-lg items-center justify-between ">
          <button type="button">
            <Link href="/home">
              <Image
                src="/icons/home.svg"
                alt="home"
                width={0}
                height={0}
                sizes="100w"
                className="w-6 h-6"
              />
            </Link>
          </button>

          <button type="button" className="relative">
            <Link href="/cart">
              <Image
                src="/icons/cart.svg"
                alt="carrinho"
                width={0}
                height={0}
                sizes="100w"
                className="w-6 h-6"
              />

              <CartBadge />
            </Link>
          </button>

          <UserButtonNavigation />
        </div>
      </div>
    </>
  );
}
