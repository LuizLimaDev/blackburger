import FavoritesCards from "@/components/Surfaces/FavoritesCards/FavoritesCards";
import priceConvert from "@/utils/priceConvert";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const productMock = {
  id: 1,
  img: "/test.svg",
  name: "test",
  description: "test description",
  price: 1000,
  category_id: 1,
};

const setOpenModalRemoveFavorite = jest.fn;

describe("Favorite card", () => {
  test("render product image", () => {
    render(
      <FavoritesCards
        product={productMock}
        setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
      />
    );
    const productImage = screen.getByAltText(productMock.name);
    expect(productImage).toBeInTheDocument();
  });

  test("render product name", () => {
    render(
      <FavoritesCards
        product={productMock}
        setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
      />
    );
    const productName = screen.getByRole("heading");
    expect(productName).toBeInTheDocument();
    expect(productName).toHaveClass("bb-title");
  });

  test("render product price", () => {
    render(
      <FavoritesCards
        product={productMock}
        setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
      />
    );
    const productPrice = screen.getByText(
      `R$ ${priceConvert(productMock.price)}`
    );
    expect(productPrice).toBeInTheDocument();
  });

  test("render add to cart icon", () => {
    render(
      <FavoritesCards
        product={productMock}
        setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
      />
    );
    const addToCartIcon = screen.getByAltText("carrinho");
    expect(addToCartIcon).toBeInTheDocument();
  });

  test("render add to favorites icon", () => {
    render(
      <FavoritesCards
        product={productMock}
        setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
      />
    );
    const addToFavoritesIcon = screen.getByAltText("favorito");
    expect(addToFavoritesIcon).toBeInTheDocument();
  });
});
