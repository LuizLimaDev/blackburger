import Button from "@/components/Inputs/Button/Button";
import Input from "@/components/Inputs/Input/Input";
import InputPassword from "@/components/Inputs/Input/InputPassword";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <main>
      <section className="flex-col-center justify-between gap-9 w-screen h-screen py-[100px] px-8">
        <h1 className="bb-title">Black Burger</h1>

        <form className="flex-col-center gap-4 mt-1">
          <Input
            src="/icons/email.svg"
            alt="email"
            type="email"
            placeholder="email"
          />
          <InputPassword />

          {/* <span className="flex gap-2 text-red-bb-400 drop-shadow-bb-1">
            <Image
              src="/icons/warning.svg"
              alt="alerta"
              width={24}
              height={24}
            />
            errors
          </span> */}

          <Button type="submit" className="mt-11">
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
