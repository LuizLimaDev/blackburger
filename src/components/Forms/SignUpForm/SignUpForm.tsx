import { signedUpNotify } from "@/components/DataDisplay/Toasts/ToastContainers/ToastContainers";
import FormAlert from "@/components/Forms/FormAlert/FormAlert";
import Button from "@/components/Inputs/Button/Button";
import Input from "@/components/Inputs/Input/Input";
import InputPassword from "@/components/Inputs/Input/InputPassword";
import { SignUpSchema } from "@/schemas/signUpSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";

type IUserData = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export default function SignUpForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<IUserData> = async (data: IUserData) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    reset();

    signedUpNotify("Cadastrado com sucesso!");

    setTimeout(() => {
      router.push("/");
    }, 2500);
  };

  return (
    <>
      <form
        className="flex-col-center gap-4 mt-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          src="/icons/user.svg"
          alt="nome"
          type="text"
          placeholder="nome"
          register={{
            ...register("name", { required: "Preencha o nome por favor!" }),
          }}
        />
        <Input
          src="/icons/email.svg"
          alt="email"
          type="email"
          placeholder="email"
          register={{
            ...register("email", { required: "Preencha o email por favor!" }),
          }}
        />
        <Controller
          control={control}
          name="phone"
          rules={{
            required: "Preencha o phone por favor!",
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <div className="w-[296px] flex rounded bg-gray-bb-100 drop-shadow-bb-2">
                <Image
                  src="/icons/phone.svg"
                  alt="telefone"
                  width={24}
                  height={24}
                  className="m-2 drop-shadow-bb-1"
                />
                <IMaskInput
                  type="text"
                  placeholder="telefone"
                  mask="(00)00000-0000"
                  className={`
                      w-[83%] h-10 pl-2 pt-1 bg-gray-bb-100 outline-none text-gray-bb-500
                    `}
                  onChange={onChange}
                  value={value}
                />
              </div>
            );
          }}
        />
        <InputPassword
          register={{
            ...register("password", {
              required: "Preencha o password por favor!",
            }),
          }}
        />

        <div className="flex flex-col items-start gap-2">
          {errors.name?.message && <FormAlert alert={errors.name?.message} />}
          {errors.email?.message && <FormAlert alert={errors.email?.message} />}
          {errors.phone?.message && <FormAlert alert={errors.phone?.message} />}
          {errors.password?.message && (
            <FormAlert alert={errors.password?.message} />
          )}
        </div>

        <Button type="submit" className="mt-11">
          Cadastrar
        </Button>
      </form>
    </>
  );
}
