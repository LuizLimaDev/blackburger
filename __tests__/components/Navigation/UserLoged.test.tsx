import UserLoged from "@/components/Navigation/BottomNavigation/UserLoged/UserLoged";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

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
const mockHandleLogOut = jest.fn();
let setActiveUserMenu: jest.Mock<boolean, [], any>;

beforeAll(() => {
  setActiveUserMenu = jest.fn(() => true);
});

describe("Render user loged popover", () => {
  test("render user loged name", () => {
    render(
      <UserLoged
        handleLogOut={mockHandleLogOut}
        setActiveUserMenu={setActiveUserMenu}
      />
    );
    const userName = screen.getByTitle("username");
    expect(userName).toBeInTheDocument();
  });

  test("render link to favorites", () => {
    render(
      <UserLoged
        handleLogOut={mockHandleLogOut}
        setActiveUserMenu={setActiveUserMenu}
      />
    );
    const link = screen.getByText("Favoritos");
    expect(link).toBeInTheDocument();
  });

  test("render button logout", () => {
    render(
      <UserLoged
        handleLogOut={mockHandleLogOut}
        setActiveUserMenu={setActiveUserMenu}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

describe("Action of each element", () => {
  test("render user name", () => {
    render(
      <UserLoged
        handleLogOut={mockHandleLogOut}
        setActiveUserMenu={setActiveUserMenu}
      />
    );
    const userName = screen.getByTitle("username");
    expect(userName).toHaveTextContent("admin");
  });

  test("navigate to favorites page", async () => {
    render(
      <UserLoged
        handleLogOut={mockHandleLogOut}
        setActiveUserMenu={setActiveUserMenu}
      />
    );
    const buttonLogOut = screen.getByText("Logout");
    fireEvent.click(buttonLogOut);
    await waitFor(() => {
      expect(mockHandleLogOut).toHaveBeenCalledTimes(1);
    });
  });
});
