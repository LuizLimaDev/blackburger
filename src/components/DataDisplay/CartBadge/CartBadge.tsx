"use client";

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function CartBadge() {
  const { productsOnCart } = useContext(CartContext);

  return (
    <>
      {productsOnCart.length > 0 && (
        <span
          className="
            absolute 
            top-[-12px] 
            flex 
            items-center 
            justify-center 

            h-5 
            w-5 
            ml-4 
            rounded-full 
            
            font-lilita 
            text-gray-bb-100
            bg-red-bb-500  
            "
        >
          {productsOnCart.length}
        </span>
      )}
    </>
  );
}
