import Button from "@/components/Inputs/Button/Button";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("render and title of a button", () => {
  test("render button element", () => {
    render(<Button type="button">buttonMock</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("render button style", () => {
    render(<Button type="button">buttonMock</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bb-button");
  });

  test("render button text", () => {
    render(<Button type="button">buttonMock</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("buttonMock");
  });
});
