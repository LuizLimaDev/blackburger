import FeaturingSlider from "@/components/Navigation/FeaturingSlider/FeaturingSlider";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import products from "../../../src/components/Navigation/FeaturingSlider/__mocks__/products";

const productsMock = products;

describe("Featuring Slide menu", () => {
  test("render a list of products", async () => {
    render(await FeaturingSlider({ products: productsMock }));
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render the rigth number of list items", async () => {
    render(await FeaturingSlider({ products: productsMock }));
    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(3);
  });
});
