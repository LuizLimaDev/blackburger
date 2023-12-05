import Image from "next/image";
import Link from "next/link";

export default function BottomNavigation() {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-40 h-12 w-full border-t border-gray-bb-500 bg-gray-bb-500">
        <div className="mx-auto flex px-5 h-full max-w-lg items-center justify-between ">
          <button type="button">
            <Link href="/home">
              <Image
                src="/icons/home.svg"
                alt="home"
                width={0}
                height={0}
                sizes="100w"
                className="w-full h-auto"
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
                className="w-full h-auto"
              />
            </Link>
          </button>

          <button type="button">
            <Image
              src="/icons/user.svg"
              alt="user"
              width={0}
              height={0}
              sizes="100w"
              className="w-full h-auto"
            />
          </button>

          <button type="button">
            <Image
              src="/icons/whats.svg"
              alt="whats"
              width={0}
              height={0}
              sizes="100w"
              className="w-full h-8"
            />
          </button>
        </div>
      </div>
    </>
  );
}
