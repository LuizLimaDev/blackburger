import BottomNavigation from "@/components/Navigation/BottomNavigation/BottomNavigation";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation");
jest.mock("next-auth/react", () => {
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { name: "admin" },
  };
  return {
    useSession: jest.fn(() => {
      return { data: mockSession, status: "authenticated" };
    }),
  };
});

describe("Render Bottom Navigation menu", () => {
  describe("Button home", () => {
    test("render image home button", () => {
      render(<BottomNavigation />);
      const image = screen.getByAltText("home");
      const imgSrc = image.getAttribute("src");
      expect(image).toBeInTheDocument();
      expect(imgSrc).toBe("/icons/home.svg");
    });

    test("render home button", () => {
      render(<BottomNavigation />);
      const button = screen.getByLabelText("button-home");
      expect(button).toBeInTheDocument();
    });
  });

  describe("Button cart", () => {
    test("render image cart button", () => {
      render(<BottomNavigation />);
      const image = screen.getByAltText("carrinho");
      const imgSrc = image.getAttribute("src");
      expect(image).toBeInTheDocument();
      expect(imgSrc).toBe("/icons/cart.svg");
    });

    test("render cart button", () => {
      render(<BottomNavigation />);
      const button = screen.getByLabelText("button-cart");
      expect(button).toBeInTheDocument();
    });
  });

  describe("Button user", () => {
    test("render image user button", () => {
      render(<BottomNavigation />);
      const image = screen.getByAltText("user");
      const imgSrc = image.getAttribute("src");
      expect(image).toBeInTheDocument();
      expect(imgSrc).toBe("/icons/user.svg");
    });

    test("render user button", () => {
      render(<BottomNavigation />);
      const button = screen.getByLabelText("button-cart");
      expect(button).toBeInTheDocument();
    });
  });
});
