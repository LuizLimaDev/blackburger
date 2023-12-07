"use client";

import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { CartContext } from "../../../../context/CartContext";
import { contextClass } from "../ContextClass";
import ToastUndoAddedToCart from "../ToastUndoAddedToCart/ToastUndoAddedToCart";
import { CartContext } from "@/context/CartContext";
import ToastUndoFavorite from "../ToastUndoFavorite/ToastUndoFavorite";
import { FavoriteProductsContext } from "@/context/FavoriteProducts";
// import ToastUndoFavorite from "../ToastUndoFavorite/ToastUndoFavorite";

export const signedUpNotify = (msg: string) => {
  toast.success(msg, {
    containerId: "favorite",
    icon: () => <img src="/icons/success.svg" width={24} />,
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
    icon: () => <img src="/icons/favorite.svg" width={24} />,
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
    icon: () => <img src="/icons/notify-cart.svg" />,
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
  const { productsOnCart, removeProductFromCart } = useContext(CartContext);
  const { favoritedProducts, removeFromFavorite } = useContext(
    FavoriteProductsContext
  );

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
          " absolute flex w-full bottom-11 left-1 p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer "
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
          " absolute flex w-full bottom-11 p-1  min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "flex"}
      />
    </>
  );
}
