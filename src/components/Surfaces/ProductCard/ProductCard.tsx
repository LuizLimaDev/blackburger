"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useContext } from "react";
// import { favoriteNotify } from "../../DataDisplay/Toasts/ToastContainers/ToastContainers";
interface IProductCardProps {
  id: number;
  src: string;
  alt: string;
  productName: string;
  productPrice: string;
  favorite: boolean;
}

export default function ProductCard({
  id,
  src,
  alt,
  productName,
  productPrice,
  favorite,
}: IProductCardProps) {
  // const { changeFavoriteStatus, setCurrentProductId, products } =
  //   useContext(ProductsContext);
  const router = useRouter();

  // const currentProduct = products.filter((product) => product.id === id)[0];
  // const isFavorite = currentProduct.favorite;

  // TODO - Adicionar Toast
  // function handdleFavoriteProduct() {
  //   changeFavoriteStatus(id);
  //   setCurrentProductId(id);

  //   if (favorite === false) {
  //     favoriteNotify();

  //     return;
  //   }
  // }

  return (
    <div className="mb-4 flex-col-center h-[178px] w-[40%]  justify-start rounded-lg">
      <div>
        <div
          className="
            relative flex h-[121px] w-[132px] items-center justify-center 
            rounded-[25px] bg-gray-bb-400
          "
        >
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
            className="h-[85%] w-[85%] cursor-pointer object-contain"
            onClick={() => router.push(`/product/${id}`)}
            priority={true}
          />
          <Image
            // TODO - Arrumar favoritos apos pegar do contexto
            src={favorite ? "/icons/favorite.svg" : "/icons/not-favorite.svg"}
            alt={favorite ? "favorito" : "item não favoritado"}
            width={32}
            height={32}
            className="absolute bottom-[-12px] right-[-12px] z-10"
            // onClick={() => handdleFavoriteProduct()}
          />
        </div>

        <div
          className="flex-col-center cursor-pointer p-2"
          onClick={() => router.push(`/product/${id}`)}
        >
          <h5
            className="
          mb-2 text-center font-lilita text-2xl leading-none text-yellow-bb-300 drop-shadow-bb-2
          "
          >
            {productName}
          </h5>
          <p className="text-base drop-shadow-bb-2">R$ {productPrice}</p>
        </div>
      </div>
    </div>
  );
}
