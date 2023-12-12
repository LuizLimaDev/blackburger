type TProps = {
  undo: () => void;
};

export default function ToastUndoAddedToCart({ undo }: TProps) {
  return (
    <>
      <button
        onClick={undo}
        className="pr-1 font-lilita text-base text-red-bb-500"
      >
        Desfazer
      </button>
    </>
  );
}
