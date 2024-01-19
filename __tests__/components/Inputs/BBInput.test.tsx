import BBInput from "@/components/Inputs/Input/BBInput";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Black Burger input with image", () => {
  test("render image", () => {
    render(<BBInput src="/test" alt="test" type="test" placeholder="test" />);
    const image = screen.getByLabelText("input icon");
    expect(image).toBeInTheDocument();
  });

  test("render input", () => {
    render(<BBInput src="/test" alt="test" type="test" placeholder="text" />);
    const input = screen.getByPlaceholderText("text");
    expect(input).toBeInTheDocument();
  });
});
