import QtdCounter from "@/components/DataDisplay/QtdCounter/QtdCounter";
import { CartContext } from "@/context/CartContext";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const contextValues = {
  productsOnCart: [],
  setProductsOnCart: () => {},
  currentProductId: 0,
  setCurrentProductId: () => {},
  setQuantityCounter: () => {},
  decreaseProductCounter: () => {},
  increaseProductCounter: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  cartSubtotal: 0,
  cartDiscount: 0,
  tax: 0,
  cartTotalPrice: 0,
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
};

describe("Render the product quantity", () => {
  test("render the minus image", () => {
    render(<QtdCounter />);

    const img = screen.getByRole("img", { name: /diminuir quantidade/ });

    expect(img).toBeInTheDocument();
  });

  test("render the initial qtd 01", () => {
    const { rerender } = render(
      <CartContext.Provider value={{ quantityCounter: 1, ...contextValues }}>
        <QtdCounter />
      </CartContext.Provider>
    );

    const quantity = screen.getByText(/01/);

    expect(quantity).toBeInTheDocument();
    expect(quantity).toHaveTextContent("01");

    rerender(
      <CartContext.Provider value={{ quantityCounter: 2, ...contextValues }}>
        <QtdCounter />
      </CartContext.Provider>
    );
    expect(quantity).toHaveTextContent("02");
  });

  test("render the plus image", () => {
    render(<QtdCounter />);

    const img = screen.getByRole("img", { name: /aumentar quantidade/ });

    expect(img).toBeInTheDocument();
  });
});
