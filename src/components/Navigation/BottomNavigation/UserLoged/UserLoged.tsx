"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type TProps = {
  setActiveUserMenu: Dispatch<SetStateAction<boolean>>;
  handleLogOut: () => void;
};

export default function UserLoged({ setActiveUserMenu, handleLogOut }: TProps) {
  const { data: session } = useSession();

  function username() {
    if (session?.user?.name) {
      return session?.user?.name?.split(" ")[0];
    }

    return session?.user?.userLoged?.name.split(" ")[0];
  }

  return (
    <div>
      {session && (
        <div className="flex-col-center py-[18px]">
          <span
            className="
              bb-title text-base capitalize text center
            "
            title="username"
          >
            {username()}
          </span>

          <Link href="/favorites" onClick={() => setActiveUserMenu(false)}>
            Favoritos
          </Link>

          <button
            className="mt-5 text-yellow-bb-400"
            onClick={() => handleLogOut()}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
