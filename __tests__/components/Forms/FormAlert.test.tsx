import FormAlert from "@/components/Forms/FormAlert/FormAlert";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("render form alert correctly", () => {
  test("render alert image", () => {
    render(<FormAlert alert="test" />);
    const image = screen.getByAltText("alerta");
    expect(image).toBeInTheDocument();
  });

  test("render alert message", () => {
    render(<FormAlert alert="test" />);
    const alertText = screen.getByLabelText("alert message");
    expect(alertText).toBeInTheDocument();
    expect(alertText).toHaveTextContent("test");
  });
});
