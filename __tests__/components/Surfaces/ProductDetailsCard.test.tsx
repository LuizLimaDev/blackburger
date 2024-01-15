import QtdCounter from "@/components/DataDisplay/QtdCounter/QtdCounter";
import ProductDetailsCard from "@/components/Surfaces/ProductDetailsCard/ProductDetailsCard";
import productInfo from "@/components/Surfaces/ProductDetailsCard/__mocks__/productInfo";
import priceConvert from "@/utils/priceConvert";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const paramsMock = productInfo;

describe("Product Details card", () => {
  test("render product image", () => {
    render(<ProductDetailsCard productInfo={paramsMock} />);
    const image = screen.getByAltText(paramsMock.product.name);
    expect(image).toBeInTheDocument();
  });

  test("render product name", () => {
    render(<ProductDetailsCard productInfo={paramsMock} />);
    const name = screen.getByRole("heading");
    expect(name).toBeInTheDocument();
    expect(name).toHaveClass("bb-title");
  });

  test("render product description", () => {
    render(<ProductDetailsCard productInfo={paramsMock} />);
    const description = screen.getByText(paramsMock.product.description);
    expect(description).toBeInTheDocument();
  });

  test("render product quantity counter", () => {
    render(<ProductDetailsCard productInfo={paramsMock} />);
    const productQtdCounter = screen.getByText("00");
    expect(productQtdCounter).toBeInTheDocument();
  });

  test("render product price", () => {
    render(<ProductDetailsCard productInfo={paramsMock} />);
    const price = screen.getByText(
      `R$ ${priceConvert(paramsMock.product.price)}`
    );
    expect(price).toBeInTheDocument();
  });

  test("render  button Adicionar", () => {
    render(<ProductDetailsCard productInfo={paramsMock} />);
    const addButton = screen.getByText("Adicionar");
    expect(addButton).toBeInTheDocument();
  });
});
