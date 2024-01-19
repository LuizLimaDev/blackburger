import InputPassword from "@/components/Inputs/Input/InputPassword";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Render input password", () => {
  test("render image", () => {
    render(<InputPassword />);
    const image = screen.getByAltText("senha");
    expect(image).toBeInTheDocument();
  });

  test("render input password", () => {
    render(<InputPassword />);
    const inputPassword = screen.getByPlaceholderText("senha");
    expect(inputPassword).toBeInTheDocument();
  });

  test("render image to show password", () => {
    render(<InputPassword />);
    const image = screen.getByAltText("mostrar senha");
    expect(image).toBeInTheDocument();
  });

  test("render image to hide password", () => {
    render(<InputPassword />);
    const image = screen.getByAltText("mostrar senha");
    const imageSrc = image.getAttribute("src");
    fireEvent.click(image);
    const updatedImageSrc = image.getAttribute("src");
    expect(updatedImageSrc).not.toBe(imageSrc);
  });
});
