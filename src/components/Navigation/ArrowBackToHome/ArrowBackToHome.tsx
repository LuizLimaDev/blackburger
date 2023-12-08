"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ArrowBackToHome() {
  const route = useRouter();

  return (
    <>
      <Image
        src="/icons/arrow-back.svg"
        alt="voltar"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-6 h-5 left-4 top-8 cursor-pointer"
        onClick={() => route.push("/home")}
      />
    </>
  );
}
