import FeaturedCard from "@/components/Surfaces/FeaturedCard/FeaturedCard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Featured card", () => {
  test("render link component", () => {
    render(
      <FeaturedCard
        id={1}
        src="/test"
        alt="alt test"
        productName="product name test"
        productPrice="1000"
      />
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  test("render product image", () => {
    render(
      <FeaturedCard
        id={1}
        src="/test.svg"
        alt="alt test"
        productName="product name test"
        productPrice="1000"
      />
    );
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "alt test");
    expect(img).toHaveAttribute("src", "/test.svg");
  });

  test("render product name", () => {
    render(
      <FeaturedCard
        id={1}
        src="/test.svg"
        alt="alt test"
        productName="product name test"
        productPrice="1000"
      />
    );
    const name = screen.getAllByRole("heading");
    expect(name[0]).toBeInTheDocument();
    expect(name[0]).toHaveClass("featuring-title");
    expect(name[1]).toBeInTheDocument();
    expect(name[1]).toHaveClass("featuring-title");
  });

  test("render product price", () => {
    render(
      <FeaturedCard
        id={1}
        src="/test.svg"
        alt="alt test"
        productName="product name test"
        productPrice="1000"
      />
    );
    const price = screen.getByLabelText("price");
    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("R$");
  });
});
