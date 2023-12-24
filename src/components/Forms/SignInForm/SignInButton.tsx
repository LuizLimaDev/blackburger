"use client";

import { signInresult } from "@/services/auth/signin";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  img: string;
  alt: string;
  provider: string;
  children: React.ReactNode;
};

export default function SignInButton({
  img,
  alt,
  provider,
  children,
}: Props): JSX.Element {
  const router = useRouter();

  async function handleLogin() {
    await signInresult(provider);

    if (!signInresult) {
      router.replace("/");
    }

    router.replace("/home");
  }

  return (
    <>
      <div
        className="
        flex 
        h-9 
        w-32 
        cursor-pointer 
        items-center 
        justify-center 
        gap-2
        rounded 
        bg-gray-bb-400
        drop-shadow-bb-2
      "
        onClick={() => handleLogin()}
        aria-label="login container"
      >
        <Image
          src={img}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-6 h-6"
        />

        <button className="font-lilita text-gray-bb-100 drop-shadow-bb-1 cursor-pointer">
          <span className="drop-shadow-bb-1">{children}</span>
        </button>
      </div>
    </>
  );
}
