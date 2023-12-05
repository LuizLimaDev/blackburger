"use client";

import { deleteCookies } from "@/utils/cookiesControl";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserLoged() {
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
