import useOpenShop from "@/hooks/useOpenShop";
import Image from "next/image";

export default function HeaderHome() {
  const isOpen = useOpenShop();

  return (
    <div className="mx-4 mt-8 flex justify-between">
      <div className="flex items-center">
        <Image
          src="/ui/logo.png"
          alt="logo black burger"
          width={72}
          height={67}
          priority={true}
          className="h-auto w-auto"
          aria-label="logo black burger"
        />
        <h1 className="bb-title text-2xl capitalize">Black Burger</h1>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/icons/notification.svg"
          alt="notificação"
          width={0}
          height={0}
          sizes="100vw"
          className="w-6 h-7 drop-shadow-bb-2"
          aria-label="imagem de notificação"
        />
        <p
          className={`
        ${isOpen ? "text-green-500" : "text-red-500"}
        font-lilita text-xs uppercase mt-1 drop-shadow-bb-2
        `}
          role="paragraph"
        >
          {isOpen ? "Aberto" : "Fechado"}
        </p>
      </div>
    </div>
  );
}
