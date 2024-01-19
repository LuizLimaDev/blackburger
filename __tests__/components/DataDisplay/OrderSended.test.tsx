import OrderSended from "@/components/DataDisplay/OrderSended/OrderSended";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Return order sended message", () => {
  test("return sended image", () => {
    render(<OrderSended />);

    const img = screen.getByAltText("pedido enviado!");

    expect(img).toBeInTheDocument();
  });

  test(`contain a heading`, () => {
    render(<OrderSended />);

    const h1 = screen.getByRole("heading");

    expect(h1).toBeInTheDocument();
  });

  test(`have the text "Pedido enviado"`, () => {
    render(<OrderSended />);

    const text = screen.getByText(/Pedido enviado!/);

    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("bb-title text-2xl");
  });
});
