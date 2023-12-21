"use client";

import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contextClass } from "../ContextClass";
import ToastUndoAddedToCart from "../ToastUndoAddedToCart/ToastUndoAddedToCart";
import { CartContext } from "@/context/CartContext";
import ToastUndoFavorite from "../ToastUndoFavorite/ToastUndoFavorite";
import { FavoriteProductsContext } from "@/context/FavoriteProducts";
import Image from "next/image";
import useCart from "@/hooks/useCart";

export const signedUpNotify = (msg: string) => {
  toast.success(msg, {
    containerId: "favorite",
    icon: () => (
      <Image
        src="/icons/success.svg"
        alt="sucesso no cadastro"
        width={24}
        height={24}
      />
    ),
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const favoriteNotify = () => {
  toast.success("Favoritado com sucesso!", {
    containerId: "favorite",
    icon: () => (
      <Image
        src="/icons/favorite.svg"
        alt="favoritado"
        width={24}
        height={24}
      />
    ),
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const addedOnCartNotify = () => {
  toast.success("Adicionado ao carrinho!", {
    containerId: "cart",
    icon: () => (
      <Image
        src="/icons/notify-cart.svg"
        alt="adicionado ao carrinho"
        width={24}
        height={24}
      />
    ),
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export default function ToastContainers() {
  const { productsOnCart } = useContext(CartContext);
  const { favoritedProducts, removeFromFavorite } = useContext(
    FavoriteProductsContext
  );
  const { removeProductFromCart } = useCart();

  function undoProductAddedToFavorite(): void {
    const lastProductAdded = favoritedProducts[favoritedProducts.length - 1].id;

    removeFromFavorite(lastProductAdded);
  }

  function undoProductAddedToCart(): void {
    const lastProductAdded = productsOnCart[productsOnCart.length - 1].id;

    removeProductFromCart(lastProductAdded);
  }

  return (
    <>
      <ToastContainer
        enableMultiContainer
        containerId={"favorite"}
        position="bottom-center"
        limit={2}
        hideProgressBar
        icon={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover={false}
        closeButton={<ToastUndoFavorite undo={undoProductAddedToFavorite} />}
        toastClassName={({ type }: any) =>
          contextClass[type || "default"] +
          " absolute flex w-full bottom-[6.5vh] p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer touch-auto tablet:bottom-[3vh]"
        }
        bodyClassName={() => "flex "}
      />

      <ToastContainer
        enableMultiContainer
        containerId={"cart"}
        position="bottom-center"
        limit={2}
        hideProgressBar
        icon={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover={false}
        closeButton={<ToastUndoAddedToCart undo={undoProductAddedToCart} />}
        toastClassName={({ type }: any) =>
          contextClass[type || "default"] +
          " absolute flex w-full bottom-[6.5vh] p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer touch-auto tablet:bottom-[3vh]"
        }
        bodyClassName={() => "flex"}
      />
    </>
  );
}
