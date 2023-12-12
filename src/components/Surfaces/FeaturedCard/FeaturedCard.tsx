import Image from "next/image";
import Link from "next/link";

type TFeaturedCardsProps = {
  id: number;
  src: string;
  alt: string;
  productName: string;
  productPrice: string;
};

export default function FeaturedCard({
  id,
  src,
  alt,
  productName,
  productPrice,
}: TFeaturedCardsProps) {
  const nameSplit = productName.split(" ");

  return (
    <>
      <Link
        href={`/product/${id}`}
        className="w-[65%] tablet:w-[35%] laptop:w-[24%]"
      >
        <div className="relative ml-[30px] flex w-[65vw] cursor-pointer">
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            className="absolute -left-11 bottom-1 z-10 h-full max-h-[114px] w-full max-w-[110px]"
          />
          <div
            className="
              relative flex h-[88px] w-[122px] flex-col rounded-[30px] bg-yellow-bb-300 p-4
            "
          >
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
      </Link>
    </>
  );
}
