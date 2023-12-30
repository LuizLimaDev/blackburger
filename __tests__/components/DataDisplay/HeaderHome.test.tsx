import HeaderHome from "@/components/DataDisplay/HeaderHome/HeaderHome";
import useOpenShop from "@/hooks/useOpenShop";
import "@testing-library/jest-dom";
import { render, renderHook, screen } from "@testing-library/react";

jest.mock("../../../src/hooks/useOpenShop");
const MockUseOpenShop = useOpenShop as jest.MockedFunction<typeof useOpenShop>;

describe("expect the Header have your elements", () => {
  test("render the logo img of Black Burger", () => {
    render(<HeaderHome />);
    const img = screen.getByRole("img", { name: "logo black burger" });
    expect(img).toBeInTheDocument();
  });

  test("render the title Black Burger", () => {
    render(<HeaderHome />);
    const h1 = screen.getByRole("heading");
    expect(h1).toBeInTheDocument();
  });

  test("render the text Black Burger", () => {
    render(<HeaderHome />);
    const text = screen.getByText("Black Burger");
    expect(text).toBeInTheDocument();
  });

  test("render the Black Burger title style", () => {
    render(<HeaderHome />);
    const h1 = screen.getByRole("heading");
    expect(h1).toHaveClass("bb-title text-2xl capitalize");
  });

  test("render the notification img", () => {
    render(<HeaderHome />);
    const img = screen.getByRole("img", { name: "imagem de notificação" });
    expect(img).toBeInTheDocument();
  });

  test("render text Fechado if isOpen is false", () => {
    MockUseOpenShop.mockReturnValue(false);
    render(<HeaderHome />);

    const { result } = renderHook(() => useOpenShop());
    const paragraph = screen.getByRole("paragraph");
    const text = screen.getByText(/Fechado/);

    expect(result.current).toBeFalsy();
    expect(paragraph).toHaveClass("text-red-500");
    expect(text).toBeInTheDocument();
    expect(paragraph).toMatchSnapshot();
  });

  test("render text Abert if isOpen is true", () => {
    MockUseOpenShop.mockReturnValue(true);
    render(<HeaderHome />);

    const { result } = renderHook(() => useOpenShop());
    const paragraph = screen.getByRole("paragraph");
    const text = screen.getByText(/Aberto/);

    expect(result.current).not.toBeFalsy();
    expect(paragraph).toHaveClass("text-green-500");
    expect(text).toBeInTheDocument();
    expect(paragraph).toMatchSnapshot();
  });
});
