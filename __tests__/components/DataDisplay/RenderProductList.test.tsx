import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import productListMock from "../../../src/components/DataDisplay/RenderProductList/__mock__/productListMock";
import RenderProductList from "@/components/DataDisplay/RenderProductList/RenderProductList";

const productsMock = productListMock;
jest.mock("next/navigation");

describe("Render product list", () => {
  test("render list items", () => {
    render(RenderProductList(productsMock));
    const productList = screen.getAllByRole("listitem");
    expect(productList).toHaveLength(productsMock.length);
  });
});
