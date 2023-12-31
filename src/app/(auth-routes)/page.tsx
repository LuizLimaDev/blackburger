"use client";

import FormAlert from "@/components/Forms/FormAlert/FormAlert";
import SignInButton from "@/components/Forms/SignInForm/SignInButton";
import Button from "@/components/Inputs/Button/Button";
import BBInput from "@/components/Inputs/Input/BBInput";
import InputPassword from "@/components/Inputs/Input/InputPassword";
import { signInSchema } from "@/schemas/signInSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

type IUserData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const [signInErrors, setSignInErrors] = useState<string>("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signInSchema),
  });

  async function onSubmit(data: IUserData) {
    const result = await signIn("blackburgerSingIn", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) return setSignInErrors(result.error);

    router.replace("/home");
  }

  return (
    <main>
      <section
        className="flex-col-center justify-between gap-9 w-screen h-screen py-[100px] px-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="bb-title">Black Burger</h1>

        <form
          className="flex-col-center gap-4 mt-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <BBInput
            src="/icons/email.svg"
            alt="email"
            type="email"
            placeholder="email"
            register={{
              ...register("email", { required: "Preencha o email!" }),
            }}
          />
          <InputPassword
            register={{
              ...register("password", { required: "Preencha o password!" }),
            }}
          />

          <div className="flex flex-col items-start gap-2">
            {errors.email?.message && (
              <FormAlert alert={errors.email?.message} />
            )}
            {errors.password?.message && (
              <FormAlert alert={errors.password?.message} />
            )}
            {signInErrors && <FormAlert alert={signInErrors} />}
          </div>

          <Button
            type="submit"
            className={`
          ${
            signInErrors || errors.email?.message || errors.password?.message
              ? "mt-4"
              : "mt-12"
          }
          cursor-pointer
          `}
          >
            Entrar
          </Button>
        </form>

        <p>
          Não tem cadastro? &nbsp;
          <Link href="/signup" className="text-yellow-bb-300">
            Clique aqui
          </Link>
        </p>

        <div className="flex gap-[6px]">
          <Image
            src="/ui/divider.svg"
            alt="divisor"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[140px] h-6"
          />
          <span>ou</span>
          <Image
            src="/ui/divider.svg"
            alt="divisor"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[140px] h-6"
          />
        </div>

        <div className="flex gap-9">
          <SignInButton
            img="/icons/facebook.svg"
            alt="logotipo facebook"
            provider="facebook"
          >
            Facebook
          </SignInButton>

          <SignInButton
            img="/icons/google.svg"
            alt="logotipo google"
            provider="google"
          >
            Google
          </SignInButton>
        </div>
      </section>
    </main>
  );
}
