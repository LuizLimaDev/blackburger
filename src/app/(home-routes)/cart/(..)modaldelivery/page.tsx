import Link from "next/link";
import DeliveryForm from "../../../../components/Forms/DeliveryForm/DeliveryForm";

export default function ModalDelivery() {
  return (
    <>
      <div className="modal-shade z-50">
        <div className="flex w-[320px] flex-col items-center rounded-lg bg-gray-300 drop-shadow-bb-4">
          <Link
            href="/cart"
            className="mr-4 mt-4 self-end font-lilita text-base text-gray-400"
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
