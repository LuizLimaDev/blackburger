"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface IFeaturedCardsProps {
  id: number;
  src: string;
  alt: string;
  productName: string;
  productPrice: string;
}

export default function FeaturedCard({
  id,
  src,
  alt,
  productName,
  productPrice,
}: IFeaturedCardsProps) {
  const router = useRouter();

  const nameSplit = productName.split(" ");

  return (
    <div
      className="relative ml-[30px] mr-7 flex w-[254px] cursor-pointer"
      onClick={() => router.push(`/product/${id}`)}
      // TODO - Testar com link para poder deixar SSR
    >
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        className="absolute -left-11 bottom-1 z-10 h-full max-h-[114px] w-full max-w-[110px]"
      />
      <div className="relative flex h-[88px] w-[122px] flex-col rounded-[30px] bg-yellow-bb-300 p-4">
        <div className="absolute top-2">
          <h5
            className={`
            ${
              nameSplit[0].length > 5
                ? "text-[28px]"
                : "pl-2 text-[38px] tracking-[0.7rem]"
            } 
            ml-10 w-[97px] font-lilita uppercase leading-none text-gray-bb-100 drop-shadow-bb-2
            `}
          >
            {nameSplit[0]}
          </h5>
          <h5
            className={`
            ${
              nameSplit[0].length > 5
                ? "text-[28px]"
                : "pl-2 text-[38px] tracking-[0.7rem]"
            }
            ml-12 w-[97px] font-lilita text-[32px] uppercase leading-none text-gray-bb-100100 drop-shadow-bb-2
            `}
          >
            {nameSplit[1]}
          </h5>
        </div>

        <p className="drop-shadow-bb-price absolute -bottom-2 ml-14 w-full font-lilita text-base  text-gray-bb-500 text-shadow-bb-price">
          R$ {productPrice}
        </p>
      </div>
    </div>
  );
}
