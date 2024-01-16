import useFavorite from "@/hooks/useFavorite";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";

describe("Favorite custom hook", () => {
  test("boolean return with favorite value", () => {
    const { result } = renderHook(useFavorite);
    expect(result.current.isFavorite).toBeFalsy();
  });
});
