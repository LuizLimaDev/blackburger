"use client";

import { FavoriteProductsContext } from "@/context/FavoriteProducts";
import Link from "next/link";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type TProps = {
  openModalRemoveFavorite: boolean;
  setOpenModalRemoveFavorite: Dispatch<SetStateAction<boolean>>;
};

export default function ModalRemoveFavorite({
  openModalRemoveFavorite,
  setOpenModalRemoveFavorite,
}: TProps) {
  const { currentProduct, removeFromFavorite } = useContext(
    FavoriteProductsContext
  );
  const [currentProductId, setCurrentProductId] = useState<number>(0);

  useEffect(() => {
    setCurrentProductId(Number(currentProduct?.id));
  }, [currentProduct]);

  function handleRemoveFavorite() {
    removeFromFavorite(currentProductId);
    setOpenModalRemoveFavorite(false);
  }

  return (
    <>
      <div
        className={`
            ${openModalRemoveFavorite ? "flex" : "hidden"}
            modal-shade z-50
        `}
      >
        <div
          className="
            fixed 
            flex-col-center 
            
            
            rounded-lg 
            drop-shadow-bb-4
            
            bg-gray-bb-300 

            tablet:w-[50vw]
            laptop:w-[20vw]
          "
        >
          <Link
            href="/cart"
            className="mr-4 mt-4 mb-2 self-end font-lilita text-base text-gray-bb-400"
          >
            X
          </Link>

          <div className="px-[34px]">
            <h1 className="mb-4 text-xl text-center">Remover dos favoritos?</h1>

            <button
              type="button"
              onClick={() => handleRemoveFavorite()}
              className="
                pt-2 pb-1 px-6 rounded drop-shadow-bb-1 font-bold bg-red-bb-500 cursor-pointer
              "
            >
              Remover
            </button>
            <button
              type="button"
              onClick={() => setOpenModalRemoveFavorite(false)}
              className="
                pt-2 
                pb-1 
                px-6 
                ml-4 
                mb-6 
                rounded 
                drop-shadow-bb-1 
                
                font-bold 
                text-gray-bb-500
                
                bg-gray-bb-200 
                cursor-pointer
              "
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
