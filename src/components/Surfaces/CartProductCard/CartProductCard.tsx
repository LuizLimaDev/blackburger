import { CartContext } from "@/context/CartContext";
import { CartProduct } from "@/types/cart";
import priceConvert from "@/utils/priceConvert";
import Image from "next/image";
import { useContext } from "react";

export default function CartProductCard({ product }: { product: CartProduct }) {
  const { decreaseProductQuantity, increaseProductQuantity } =
    useContext(CartContext);

  function handleDecreaseQtd(product: CartProduct): void {
    decreaseProductQuantity(product);
  }

  function handleIncreaseQtd(product: CartProduct): void {
    increaseProductQuantity(product);
  }

  return (
    <div
      className="
            flex
            h-[75px]
            w-[300px]
            items-center

            justify-between
            gap-5
            rounded-[4px]
            bg-gray-bb-400
            pl-2

            pr-3
          "
    >
      <Image
        src={product.img}
        alt={product.name}
        width={70}
        height={55}
        sizes="100vw"
        className="max-h-[55px] max-w-[70px]"
      />

      <div>
        <h1
          className={`
            ${product.name.length > 8 && "text-lg"}
            bb-title mb-2 w-[70px] text-2xl leading-none
            `}
        >
          {product.name}
        </h1>

        <p className="text-base">R$ {priceConvert(product.price)}</p>
      </div>

      <div className="min-w-[79px]">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/icons/minus.svg"
            alt="diminuir quantidade"
            width={16}
            height={16}
            onClick={() => handleDecreaseQtd(product)}
          />

          <p className="min-w-[30px] pb-1 text-center font-lilita text-[24px] drop-shadow-bb-2">
            {product.quantity.toString().padStart(2, "0")}
          </p>

          <Image
            src="/icons/plus.svg"
            alt="aumentar quantidade"
            width={16}
            height={16}
            onClick={() => handleIncreaseQtd(product)}
          />
        </div>
      </div>
    </div>
  );
}
