import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NotFound from "../../src/app/not-found";

describe("Not found page", () => {
  test("render header link", () => {
    render(<NotFound />);
    const link = screen.getByLabelText("logo-blackburger");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/home");
  });

  test("render logo image", () => {
    render(<NotFound />);
    const img = screen.getByAltText("logo black burger");
    expect(img).toBeInTheDocument();
  });

  test("render Black Buger title", () => {
    render(<NotFound />);
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Black Burger");
  });

  test("render not found image", () => {
    render(<NotFound />);
    const img = screen.getByAltText("produto não encontrado");
    expect(img).toBeInTheDocument();
  });

  test("render not found text", () => {
    render(<NotFound />);
    const img = screen.getByText("Página não encontrada!");
    expect(img).toBeInTheDocument();
  });

  test("render back to home link", () => {
    render(<NotFound />);
    const link = screen.getByLabelText("back-to-home");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/home");
    expect(link).toHaveTextContent("Voltar");
  });
});
