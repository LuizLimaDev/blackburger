"use client";

import Image from "next/image";
import { useState } from "react";
import UserLoged from "../UserLoged/UserLoged";

export default function UserButtonNavigation() {
  const [activeUserMenu, setActiveUserMenu] = useState<boolean>(false);

  return (
    <div className="flex-col-center relative">
      <button
        type="button"
        className=" px-5"
        onClick={() => {
          setActiveUserMenu(!activeUserMenu);
        }}
      >
        <Image
          src="/icons/user.svg"
          alt="user"
          width={26}
          height={26}
          sizes="100vw"
          className="self-center justify-self-center object-contain"
        />
      </button>

      <div
        className={`
            ${activeUserMenu === true ? "flex" : "hidden"}

            absolute
            top-[-110px]
            h-[100px]
            
            min-w-[160px]
            flex-col
            items-center
            justify-center
            rounded-md
            bg-gray-bb-500            
            px-2
            drop-shadow-bb-2
  
      `}
      >
        <UserLoged />

        <div id="arrow" className="popover-arrow left-16 xl:left-14"></div>
      </div>
    </div>
  );
}
