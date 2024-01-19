import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex-col-center justify-center w-screen h-screen relative">
        <div className="flex items-center gap-4 absolute top-4 left-4">
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
              bb-title text-[32px] capitalize tablet:text-[24px]
            "
          >
            Black Burger
          </h1>
        </div>

        <Image
          src="/ui/not-found.svg"
          alt="logo black burger"
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

        <p className="bb-title capitalize text-center leading-10">
          Página não encontrada!
        </p>

        <Link
          href="/home"
          className="mt-8 text-xl font-bold cursor-pointer laptop:mt-20"
        >
          Voltar
        </Link>
      </div>
    </>
  );
}
