import DeliveryForm from "@/components/Forms/DeliveryForm/DeliveryForm";
import Link from "next/link";

export default function ModalDelivery() {
  return (
    <>
      <div className="modal-shade z-50">
        <div
          className="
            flex-col-center w-[320px] rounded-lg bg-gray-bb-300 drop-shadow-bb-4
          "
        >
          <Link
            href="/cart"
            className="mr-4 mt-4 self-end font-lilita text-base text-gray-bb-400"
          >
            X
          </Link>

          <div className="px-[34px]">
            <h1 className="bb-title mb-10">Dados de entrega</h1>

            <DeliveryForm />
          </div>
        </div>
      </div>
    </>
  );
}
