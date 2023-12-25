import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation");
const pushMock = jest.fn();

describe("User navigation to home page", () => {
  test("render image", () => {
    render(<ArrowBackToHome />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  test("should have cursor pointer", () => {
    render(<ArrowBackToHome />);
    const image = screen.getByRole("img");
    expect(image).toHaveClass("cursor-pointer");
  });

  test("navigation after click", () => {
    useRouter.mockReturnValue({ push: pushMock });
    render(<ArrowBackToHome />);
    fireEvent.click(screen.getByRole("img"));
    expect(pushMock).toHaveBeenCalledWith("/home");
  });
});
