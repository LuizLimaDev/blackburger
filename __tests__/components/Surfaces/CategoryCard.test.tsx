import CategoryCard from "@/components/Surfaces/CategoryCard/CategoryCard";
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
});
