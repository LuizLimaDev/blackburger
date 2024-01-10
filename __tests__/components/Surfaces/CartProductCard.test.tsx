import CartProductCard from "@/components/Surfaces/CartProductCard/CartProductCard";
import product from "@/components/Surfaces/CartProductCard/__mocks__/product";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const productMock = product;

describe("Cards of Cart", () => {
  test("render product image", () => {
    render(<CartProductCard product={productMock} />);
    const image = screen.getByAltText(productMock.name);
    expect(image).toBeInTheDocument();
  });

  test("render product name", () => {
    render(<CartProductCard product={productMock} />);
    const productName = screen.getByRole("heading");
    expect(productName).toBeInTheDocument();
    expect(productName).toHaveClass("bb-title");
  });

  test("render decrease product quantity image", () => {
    render(<CartProductCard product={productMock} />);
    const image = screen.getByAltText("diminuir quantidade");
    expect(image).toBeInTheDocument();
  });

  test("render product quantity", () => {
    render(<CartProductCard product={productMock} />);
    const productName = screen.getByText("01");
    expect(productName).toBeInTheDocument();
  });

  test("render increase product quantity image", () => {
    render(<CartProductCard product={productMock} />);
    const image = screen.getByAltText("aumentar quantidade");
    expect(image).toBeInTheDocument();
  });
});
