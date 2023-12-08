import DeliveryForm from "@/components/Forms/DeliveryForm/DeliveryForm";
import Link from "next/link";

export default function ModalDelivery() {
  return (
    <>
      <div className="modal-shade z-50">
        <div
          className="
            fixed 
            flex-col-center 
            
            w-[320px] 
            rounded-lg 
            drop-shadow-bb-4
            
            bg-gray-bb-300 

            tablet:w-[50vw]
            laptop:w-[30vw]
          "
        >
          <Link
            href="/cart"
            className="mr-4 mt-4 self-end font-lilita text-base text-gray-bb-400"
          >
            X
          </Link>

          <div className="px-[34px]">
            <DeliveryForm />
          </div>
        </div>
      </div>
    </>
  );
}
