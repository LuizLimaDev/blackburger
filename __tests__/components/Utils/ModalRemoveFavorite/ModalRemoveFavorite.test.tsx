import ModalRemoveFavorite from "@/components/Utils/ModalRemoveFavorite/ModalRemoveFavorite";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const setOpenModalRemoveFavorite = jest.fn();

describe("Modal remove from Favorites", () => {
  test("render close button x", () => {
    render(
      <ModalRemoveFavorite
        openModalRemoveFavorite={true}
        setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
      />
    );
    const closeButton = screen.getByRole("link");
    expect(closeButton).toBeInTheDocument();
  });

  test("render modal title", () => {
    render(
      <ModalRemoveFavorite
        openModalRemoveFavorite={true}
        setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
      />
    );
    const modalTitle = screen.getByRole("heading");
    expect(modalTitle).toBeInTheDocument();
  });

  test("render modal remove button", () => {
    render(
      <ModalRemoveFavorite
        openModalRemoveFavorite={true}
        setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
      />
    );
    const removeButton = screen.getByText("Remover");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton).toHaveClass("cursor-pointer");
  });

  test("render modal quit button", () => {
    render(
      <ModalRemoveFavorite
        openModalRemoveFavorite={true}
        setOpenModalRemoveFavorite={setOpenModalRemoveFavorite}
      />
    );
    const quitButton = screen.getByText("Sair");
    expect(quitButton).toBeInTheDocument();
    expect(quitButton).toHaveClass("cursor-pointer");
  });
});
