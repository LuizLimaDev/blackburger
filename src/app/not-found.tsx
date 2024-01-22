import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex-col-center justify-center w-screen h-screen relative">
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

        <p
          className="
            font-lilita text-[40px] text-yellow-bb-300 drop-shadow-bb-2 text-center leading-10
          "
        >
          Página não encontrada!
        </p>

        <Link
          href="/home"
          className="mt-8 text-xl font-bold cursor-pointer laptop:mt-20"
          aria-label="back-to-home"
        >
          Voltar
        </Link>
      </div>
    </>
  );
}
