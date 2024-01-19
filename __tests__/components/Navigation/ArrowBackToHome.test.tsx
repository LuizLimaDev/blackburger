import ArrowBackToHome from "@/components/Navigation/ArrowBackToHome/ArrowBackToHome";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation");
const pushMock = jest.fn();

describe("User navigation to home page", () => {
  test("render image", () => {
    render(<ArrowBackToHome />);
    const image = screen.getByAltText("voltar");
    expect(image).toBeInTheDocument();
  });

  test("should have cursor pointer", () => {
    render(<ArrowBackToHome />);
    const image = screen.getByAltText("voltar");
    expect(image).toHaveClass("cursor-pointer");
  });

  test("navigation after click", () => {
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    render(<ArrowBackToHome />);
    fireEvent.click(screen.getByAltText("voltar"));
    expect(pushMock).toHaveBeenCalledWith("/home");
  });
});
