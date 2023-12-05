import Button from "@/components/Inputs/Button/Button";
import Input from "@/components/Inputs/Input/Input";
import InputPassword from "@/components/Inputs/Input/InputPassword";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <main>
      <section className="flex-col-center justify-between gap-9 w-screen h-screen py-[100px] px-8">
        <h1 className="bb-title">Black Burger</h1>

        <form className="flex-col-center gap-4 mt-1">
          <Input
            src="/icons/user.svg"
            alt="nome"
            type="text"
            placeholder="nome"
          />
          <Input
            src="/icons/email.svg"
            alt="email"
            type="email"
            placeholder="email"
          />
          <Input
            src="/icons/phone.svg"
            alt="telefone"
            type="tel"
            placeholder="telefone"
            pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}"
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
            Cadastrar
          </Button>
        </form>

        <p>
          Não tem cadastro? &nbsp;
          <Link href="/" className="text-yellow-bb-300">
            Clique aqui
          </Link>
        </p>
      </section>
    </main>
  );
}
