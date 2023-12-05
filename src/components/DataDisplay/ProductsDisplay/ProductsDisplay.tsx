import Button from "@/components/Inputs/Button/Button";
import ProductCard from "@/components/Surfaces/ProductCard/ProductCard";
import { IProduct } from "@/types/products";
import priceConvert from "@/utils/priceConvert";

export default async function ProductsDisplay() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products: IProduct[] = await res.json();
  // TODO - pegar os produtos com favoritos do o contexto

  const oddProducts = products.filter((product) => product.id % 2 === 0);
  const evenProducts = products.filter((product) => product.id % 2 === 1);

  return (
    <div className="mb-10 mt-11 flex justify-center px-5 xl:mt-40">
      <div
        className="
          mb-10 flex flex-col items-center justify-start gap-10 pl-2 xl:relative xl:flex-row
          "
      >
        <Button
          type="button"
          className=" flex items-center justify-center w-[74px] h-8 text-base"
        >
          Filtrar
        </Button>

        {oddProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            src={product.img}
            alt={product.name}
            productName={product.name}
            productPrice={priceConvert(product.price)}
            favorite={false} // TODO - Adicionar favoritos apos pegar do contexto
          />
        ))}
      </div>

      <div
        id="rightColumn"
        className="mb-10 flex flex-col items-center justify-start gap-10 pl-7 xl:flex-row"
      >
        {evenProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            src={product.img}
            alt={product.name}
            productName={product.name}
            productPrice={priceConvert(product.price)}
            favorite={false} // TODO - Adicionar favoritos apos pegar do contexto
          />
        ))}
      </div>
    </div>
  );
}
