import ProductCard from "@/components/Surfaces/ProductCard/ProductCard";
import priceConvert from "@/utils/priceConvert";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation");

const productMock = {
  id: 1,
  img: "/test.svg",
  name: "test",
  description: "test description",
  price: 1000,
  category_id: 1,
};

describe("Product card", () => {
  test("render product image", () => {
    render(<ProductCard product={productMock} />);
    const image = screen.getByAltText(productMock.name);
    expect(image).toBeInTheDocument();
  });

  test("render favorite image", () => {
    render(<ProductCard product={productMock} />);
    const favoriteImage = screen.getByLabelText("favorite");
    expect(favoriteImage).toBeInTheDocument();
  });

  test("render product name", () => {
    render(<ProductCard product={productMock} />);
    const productName = screen.getByRole("heading");
    expect(productName).toBeInTheDocument();
  });

  test("render product price", () => {
    render(<ProductCard product={productMock} />);
    const productPrice = screen.getByText(
      `R$ ${priceConvert(productMock.price)}`
    );
    expect(productPrice).toBeInTheDocument();
  });
});
