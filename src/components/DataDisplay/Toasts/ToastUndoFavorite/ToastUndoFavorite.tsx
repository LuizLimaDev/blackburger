type IProps = {
  undo: () => void;
};

export default function ToastUndoFavorite({ undo }: IProps) {
  return (
    <>
      <button
        onClick={undo}
        className="pr-1 font-lilita text-base text-red-500"
      >
        Desfazer
      </button>
    </>
  );
}
