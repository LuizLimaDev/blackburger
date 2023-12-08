import Image from "next/image";

export default function OrderSended() {
  return (
    <div
      className="
        flex-col-center 
        justify-center 
        
        h-[80vh] 
        
        tablet:h-[50vh] 
        "
    >
      <Image
        src="/ui/order-sended.svg"
        alt="pedido enviado!"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[240px] h-[207px]"
      />

      <h1 className="bb-title text-2xl my-10">Pedido enviado!</h1>
    </div>
  );
}
