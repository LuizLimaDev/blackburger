"use client";

import { deleteCookies } from "@/utils/cookiesControl";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type TProps = {
  setActiveUserMenu: Dispatch<SetStateAction<boolean>>;
};

export default function UserLoged({ setActiveUserMenu }: TProps) {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleLougOut() {
    await signOut({ redirect: false });
    deleteCookies();

    router.replace("/");
  }

  return (
    <div>
      {session && (
        <div className="flex-col-center">
          <Link href="/favorites" onClick={() => setActiveUserMenu(false)}>
            Favoritos
          </Link>

          <button
            className="mt-5 text-yellow-bb-400"
            onClick={() => handleLougOut()}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
