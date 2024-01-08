"use client";

import Image from "next/image";
import { useState } from "react";
import UserLoged from "../UserLoged/UserLoged";
import { signOut } from "next-auth/react";
import { deleteCookies } from "@/utils/cookiesControl";
import { useRouter } from "next/navigation";

export default function UserButtoNavigation() {
  const [activeUserMenu, setActiveUserMenu] = useState<boolean>(false);
  const router = useRouter();

  async function handleLogOut() {
    await signOut({ redirect: false });
    deleteCookies();

    router.replace("/");
  }

  return (
    <div className="flex-col-center relative">
      <button
        type="button"
        onClick={() => {
          setActiveUserMenu(!activeUserMenu);
        }}
        aria-label="user-menu"
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
            top-[-145px]
            
            min-w-[160px]
            flex-col
            items-center
            justify-center
            rounded-md
            bg-gray-bb-500            
            px-2
            drop-shadow-bb-2
  
      `}
        aria-label="menu-container"
      >
        <UserLoged
          setActiveUserMenu={setActiveUserMenu}
          handleLogOut={handleLogOut}
        />

        <div id="arrow" className="popover-arrow left-16 xl:left-14"></div>
      </div>
    </div>
  );
}
