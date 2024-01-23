"use client";

import Image from "next/image";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <main className="w-screen h-screen">
      <div className="flex-col-center justify-center">
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
