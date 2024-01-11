import CategoryCard from "@/components/Surfaces/CategoryCard/CategoryCard";
import priceConvert from "@/utils/priceConvert";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const productMock = {
  id: 1,
  img: "/test.svg",
  name: "test",
  description: "test description",
  price: 1000,
  category_id: 1,
};

describe("Render category card", () => {
  test("render product image", () => {
    render(<CategoryCard product={productMock} />);
    const image = screen.getByAltText(productMock.name);
    expect(image).toBeInTheDocument();
  });

  test("render product name", () => {
    render(<CategoryCard product={productMock} />);
    const productName = screen.getByRole("heading");
    expect(productName).toBeInTheDocument();
    expect(productName).toHaveClass("bb-title");
  });

  test("render product description", () => {
    render(<CategoryCard product={productMock} />);
    const productDescription = screen.getByText(productMock.description);
    expect(productDescription).toBeInTheDocument();
  });

  test("render add to cart icon", () => {
    render(<CategoryCard product={productMock} />);
    const addToCart = screen.getByAltText("adicionar ao carrinho");
    expect(addToCart).toBeInTheDocument();
  });

  test("render favorite icon", () => {
    render(<CategoryCard product={productMock} />);
    const notFavoriteIcon = screen.getByAltText("item não favoritado");
    expect(notFavoriteIcon).toBeInTheDocument();
  });

  test("render product price", () => {
    render(<CategoryCard product={productMock} />);
    const price = screen.getByText(priceConvert(productMock.price));
    expect(price).toBeInTheDocument();
  });
});
