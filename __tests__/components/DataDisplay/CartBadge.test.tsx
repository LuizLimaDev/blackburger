import CartBadge from "@/components/DataDisplay/CartBadge/CartBadge";
import useProductsOnCart from "@/hooks/useProductsOnCart";
import "@testing-library/jest-dom";
import { render, renderHook, screen } from "@testing-library/react";

jest.mock("../../../src/hooks/useProductsOnCart.tsx");
const MockUseProductsOnCart = useProductsOnCart as jest.MockedFunction<
  typeof useProductsOnCart
>;

describe("Render number of products in the cart", () => {
  test("render the number of products in the cart", () => {
    MockUseProductsOnCart.mockReturnValue(4);
    render(<CartBadge />);

    const { result } = renderHook(() => useProductsOnCart());
    const numberOfProducts = screen.getByRole("numberOfProducts");

    expect(result).toEqual(result);
    expect(numberOfProducts).toHaveTextContent(String(result.current));
  });
});
