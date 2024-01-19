import QtdCounter from "@/components/DataDisplay/QtdCounter/QtdCounter";
import { CartContext } from "@/context/CartContext";
import contextValues from "@/context/__mocks__/contextValues";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const contextValuesMock = contextValues;

describe("Render the product quantity", () => {
  test("render the minus image", () => {
    render(<QtdCounter />);
    const img = screen.getByAltText("diminuir quantidade");
    expect(img).toBeInTheDocument();
  });

  test("render the initial qtd 01", () => {
    const { rerender } = render(
      <CartContext.Provider
        value={{ quantityCounter: 1, ...contextValuesMock }}
      >
        <QtdCounter />
      </CartContext.Provider>
    );

    const quantity = screen.getByText(/01/);

    expect(quantity).toBeInTheDocument();
    expect(quantity).toHaveTextContent("01");

    rerender(
      <CartContext.Provider
        value={{ quantityCounter: 2, ...contextValuesMock }}
      >
        <QtdCounter />
      </CartContext.Provider>
    );
    expect(quantity).toHaveTextContent("02");
  });

  test("render the plus image", () => {
    render(<QtdCounter />);
    const img = screen.getByAltText("aumentar quantidade");
    expect(img).toBeInTheDocument();
  });
});
