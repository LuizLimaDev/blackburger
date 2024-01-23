import Image from "next/image";

export default function Loder() {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="w-[100px] p-2">
        <Image
          src="/ui/burger-top.svg"
          alt="carregando"
          width={100}
          height={100}
          sizes="100vw"
        />

        <span className="loader animate-loading"></span>
        <Image
          src="/ui/burger-bottom.svg"
          alt="carregando"
          width={100}
          height={100}
          sizes="100vw"
        />
        <h1 className="mt-2 text-center">Loading....</h1>
      </div>
    </main>
  );
}
