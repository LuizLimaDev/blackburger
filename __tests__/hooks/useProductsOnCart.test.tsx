import useProductsOnCart from "@/hooks/useProductsOnCart";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";

describe("Number of products on cart", () => {
  test("the return of cart quantity", () => {
    const { result } = renderHook(useProductsOnCart);
    const contextQuantity = result.current;
    const quantityMock = contextQuantity + 3;
    expect(quantityMock).toBe(3);
  });
});
