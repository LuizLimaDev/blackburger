"use client";

import Image from "next/image";
import Link from "next/link";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <main className="flex flex-col justify-center w-screen h-screen">
      <Link
        href="/home"
        className="flex items-center gap-4 absolute top-4 left-4"
        aria-label="logo-blackburger"
      >
        <Image
          src="/ui/logo.png"
          alt="logo black burger"
          width={72}
          height={67}
          priority={true}
          className="h-auto w-auto"
        />

        <h1
          className="
              bb-title text-2xl capitalize
            "
        >
          Black Burger
        </h1>
      </Link>

      <div className="flex-col-center">
        <Image
          src="/ui/not-found.svg"
          alt="produto não encontrado"
          width={72}
          height={67}
          priority={true}
          className="
            w-[40%] 
            h-[50%] 
            mt-8
            drop-shadow-bb-white-shadow

            tablet:w-[20%] 
            tablet:h-[30%]
            tablet:mt-0
            laptop:w-[20%] 
            laptop:h-[30%] 
          "
        />
        <h1 className="text-xl text-gray-bb-100 text-center font-bold">
          {error.message}
        </h1>
      </div>
    </main>
  );
}
