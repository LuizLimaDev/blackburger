import UserButtoNavigation from "@/components/Navigation/BottomNavigation/UserButtonNavigation/UserButtonNavigation";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

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

describe("User Button Navigation UI", () => {
  test("render menu button", () => {
    render(<UserButtoNavigation />);
    const button = screen.getByLabelText("button-user");
    expect(button).toBeInTheDocument();
  });

  test("render menu icon", () => {
    render(<UserButtoNavigation />);
    const icon = screen.getByAltText("user");
    expect(icon).toBeInTheDocument();
  });
});

describe("User Button Navigation functionality", () => {
  test("showing menu button", async () => {
    render(<UserButtoNavigation />);
    const menuWindow = screen.getByLabelText("menu-container");
    const button = screen.getByLabelText("button-user");

    fireEvent.click(button);

    expect(menuWindow).toBeInTheDocument();
  });

  test("hiding menu button", async () => {
    render(<UserButtoNavigation />);
    const menuWindow = screen.getByLabelText("menu-container");
    const button = screen.getByLabelText("button-user");

    expect(menuWindow).toHaveClass("hidden");

    fireEvent.click(button);
    expect(menuWindow).toHaveClass("flex");

    fireEvent.click(button);
    expect(menuWindow).toHaveClass("hidden");
  });
});
