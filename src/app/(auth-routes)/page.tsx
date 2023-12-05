"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <main>
      <section className="flex-col-center justify-between gap-9 w-screen h-screen py-[100px] px-8">
        <h1 className="font-lilita text-[40px] text-yellow-bb-300 drop-shadow-bb-2 uppercase">
          Black Burger
        </h1>

        <form className="flex-col-center gap-4 mt-1">
          <div className="w-[296px] flex rounded bg-gray-bb-100 drop-shadow-bb-2">
            <Image
              src="/icons/email.svg"
              alt="email"
              width={24}
              height={24}
              className="m-2 drop-shadow-bb-1"
            />

            <input
              type="email"
              placeholder="email"
              className="w-[83%] pl-2 pt-1 bg-gray-bb-100 outline-none text-gray-bb-500"
            />
          </div>

          <div className="relative w-[296px] flex rounded bg-gray-bb-100 drop-shadow-bb-2">
            <Image
              src="/icons/password.svg"
              alt="email"
              width={24}
              height={24}
              className="m-2 drop-shadow-bb-1"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="email"
              className="w-[83%] pl-2 pt-1 bg-gray-bb-100 outline-none text-gray-bb-500"
            />

            <Image
              src={
                showPassword
                  ? "/icons/password_show.svg"
                  : "/icons/password_hide.svg"
              }
              alt="mostrar senha"
              width={24}
              height={24}
              className="absolute m-auto top-0 right-3 bottom-0 drop-shadow-bb-1"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {/* <span className="flex gap-2 text-red-bb-400 drop-shadow-bb-1">
            <Image
              src="/icons/warning.svg"
              alt="alerta"
              width={24}
              height={24}
            />
            errors
          </span> */}

          <button className="py-2 px-4 mt-6 font-lilita text-2xl text-yellow-bb-300 uppercase bg-gray-bb-400 rounded drop-shadow-bb-2">
            <span className="drop-shadow-bb-2">Entrar</span>
          </button>
        </form>

        <p>
          Não tem cadastro? &nbsp;
          <span className="text-yellow-bb-300">Clique aqui</span>
        </p>

        <div className="flex gap-[6px]">
          <Image
            src="/ui/divider.svg"
            alt="divisor"
            width={140}
            height={24}
            className=""
          />
          <span>ou</span>
          <Image
            src="/ui/divider.svg"
            alt="divisor"
            width={140}
            height={24}
            className=""
          />
        </div>

        <div className="flex gap-9">
          <button className="flex items-center justify-center gap-2 w-32 h-9 rounded font-lilita bg-gray-bb-400 drop-shadow-bb-2">
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
            />
            <span className="drop-shadow-bb-2">Facebook</span>
          </button>

          <button className="flex items-center justify-center gap-2 w-32 h-9 rounded font-lilita bg-gray-bb-400 drop-shadow-bb-2">
            <Image
              src="/icons/google.svg"
              alt="facebook"
              width={24}
              height={24}
            />
            <span className="drop-shadow-bb-2">Goggle</span>
          </button>
        </div>
      </section>
    </main>
  );
}
