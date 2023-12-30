"use client";

import { contextClass } from "@/components/DataDisplay/Toasts/ContextClass";
import { signedUpNotify } from "@/components/DataDisplay/Toasts/ToastContainers/ToastContainers";
import SignUpForm, {
  IUserData,
} from "@/components/Forms/SignUpForm/SignUpForm";
import { signUpService } from "@/services/auth/signUp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

export default function SignUp() {
  const [ApiError, setApiError] = useState<string>("");
  const { reset } = useForm();
  const router = useRouter();

  const onSubmit: SubmitHandler<IUserData> = async (data: IUserData) => {
    setApiError("");
    signUpService(data, setApiError);

    reset();
    signedUpNotify("Cadastrado com sucesso!");

    setTimeout(() => {
      router.push("/");
    }, 2500);
  };

  return (
    <main>
      <section
        className="
          flex-col-center justify-between gap-9 w-screen h-screen py-[100px] px-8
        "
      >
        <h1 className="bb-title">Black Burger</h1>

        <SignUpForm onSubmit={onSubmit} ApiError={ApiError} />

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
