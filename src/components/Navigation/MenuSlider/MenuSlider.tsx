export default function MenuSlider() {
  return (
    <div className="mx-4 mt-8 flex justify-center">
      <ul
        className="
        no-scrollbar flex gap-5 overflow-auto font-lilita text-gray-100 drop-shadow-bb-2 xl:gap-40
        "
      >
        <li>Carne</li>
        <li>Frango</li>
        <li>Vegetariano</li>
        <li>Bebidas</li>
        <li>Sobremesas</li>
      </ul>
    </div>
  );
}
