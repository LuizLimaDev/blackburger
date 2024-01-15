import ProductDetailsCard from "@/components/Surfaces/ProductDetailsCard/ProductDetailsCard";
import productInfo from "@/components/Surfaces/ProductDetailsCard/__mocks__/productInfo";
import priceConvert from "@/utils/priceConvert";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const productMock = productInfo;

describe("Product Details card", () => {
  test("render product image", () => {
    render(
      <ProductDetailsCard
        id={productMock.id}
        product={productMock.product}
        isBurger={productMock.isBurger}
      />
    );
    const image = screen.getByAltText(productMock.product.name);
    expect(image).toBeInTheDocument();
  });

  test("render product name", () => {
    render(
      <ProductDetailsCard
        id={productMock.id}
        product={productMock.product}
        isBurger={productMock.isBurger}
      />
    );
    const name = screen.getByRole("heading");
    expect(name).toBeInTheDocument();
    expect(name).toHaveClass("bb-title");
  });

  test("render product description", () => {
    render(
      <ProductDetailsCard
        id={productMock.id}
        product={productMock.product}
        isBurger={productMock.isBurger}
      />
    );
    const description = screen.getByText(productMock.product.description);
    expect(description).toBeInTheDocument();
  });

  test("render product quantity counter", () => {
    render(
      <ProductDetailsCard
        id={productMock.id}
        product={productMock.product}
        isBurger={productMock.isBurger}
      />
    );
    const productQtdCounter = screen.getByText("00");
    expect(productQtdCounter).toBeInTheDocument();
  });

  test("render product price", () => {
    render(
      <ProductDetailsCard
        id={productMock.id}
        product={productMock.product}
        isBurger={productMock.isBurger}
      />
    );
    const price = screen.getByText(
      `R$ ${priceConvert(productMock.product.price)}`
    );
    expect(price).toBeInTheDocument();
  });

  test("render  button Adicionar", () => {
    render(
      <ProductDetailsCard
        id={productMock.id}
        product={productMock.product}
        isBurger={productMock.isBurger}
      />
    );
    const addButton = screen.getByText("Adicionar");
    expect(addButton).toBeInTheDocument();
  });
});
