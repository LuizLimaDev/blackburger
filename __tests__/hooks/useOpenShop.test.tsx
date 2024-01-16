import useOpenShop from "@/hooks/useOpenShop";
import "@testing-library/jest-dom";

describe("Favorite custom hook", () => {
  test("returns true when shop is open", () => {
    const mockDate = new Date("2024-01-16T22:00:00Z");
    const result = useOpenShop(mockDate);
    expect(result).toBeTruthy();
  });

  test("returns false when shop is closed", () => {
    const mockDate = new Date("2024-01-16T12:00:00Z");
    const result = useOpenShop(mockDate);
    expect(result).toBeFalsy();
  });
});
