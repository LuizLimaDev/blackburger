"use client";

import { contextClass } from "@/components/DataDisplay/Toasts/ContextClass";
import SignUpForm from "@/components/Forms/SignUpForm/SignUpForm";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function SignUp() {
  return (
    <main>
      <section
        className="
          flex-col-center justify-between gap-9 w-screen h-screen py-[100px] px-8
        "
      >
        <h1 className="bb-title">Black Burger</h1>

        <SignUpForm />

        <p>
          Não tem cadastro? &nbsp;
          <Link href="/" className="text-yellow-bb-300">
            Clique aqui
          </Link>
        </p>

        <ToastContainer
          position="bottom-center"
          limit={2}
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="colored"
          closeButton={false}
          toastClassName={({ type }: any) =>
            contextClass[type || "default"] +
            " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
          }
        />
      </section>
    </main>
  );
}
