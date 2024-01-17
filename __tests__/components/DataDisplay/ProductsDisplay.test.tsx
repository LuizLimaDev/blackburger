import ProductsDisplay from "@/components/DataDisplay/ProductsDisplay/ProductsDisplay";
import { TProduct } from "@/types/products";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";

jest.mock("next/navigation");

const productListMock: TProduct[] = [
  {
    id: 1,
    img: "/test.svg",
    name: "test",
    description: "test description",
    price: 1000,
    category_id: 1,
  },
  {
    id: 2,
    img: "/test2.svg",
    name: "test2",
    description: "test2 description",
    price: 2000,
    category_id: 2,
  },
  {
    id: 3,
    img: "/test3.svg",
    name: "test3",
    description: "test3 description",
    price: 3000,
    category_id: 3,
  },
];

describe("Products list on Display", () => {
  test("render odd list", async () => {
    render(<ProductsDisplay productsList={productListMock} />);

    const columLeft = screen.getByTestId("columnLeft");
    const listItems = within(columLeft).getAllByRole("listitem");

    expect(columLeft).toBeInTheDocument();
    expect(listItems).toHaveLength(1);
  });

  test("render even list", async () => {
    render(<ProductsDisplay productsList={productListMock} />);

    const columRight = screen.getByTestId("columRight");
    const listItems = within(columRight).getAllByRole("listitem");

    expect(columRight).toBeInTheDocument();
    expect(listItems).toHaveLength(2);
  });

  test("render laptop screen list", async () => {
    render(<ProductsDisplay productsList={productListMock} />);

    const columLaptop = screen.getByTestId("columLaptop");
    const listItems = within(columLaptop).getAllByRole("listitem");

    expect(columLaptop).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
  });
});
