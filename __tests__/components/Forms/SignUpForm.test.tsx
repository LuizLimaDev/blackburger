import SignUpForm from "@/components/Forms/SignUpForm/SignUpForm";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: () => null,
    };
  },
}));

const onSubmit = jest.fn();

describe("render signUp form", () => {
  test("render name input", () => {
    render(<SignUpForm onSubmit={onSubmit} ApiError="testMock" />);
    const inputName = screen.getByPlaceholderText("nome");
    expect(inputName).toBeInTheDocument();
  });

  test("render email input", () => {
    render(<SignUpForm onSubmit={onSubmit} ApiError="testMock" />);
    const inputEmail = screen.getByPlaceholderText("email");
    expect(inputEmail).toBeInTheDocument();
  });

  test("render phone input", () => {
    render(<SignUpForm onSubmit={onSubmit} ApiError="testMock" />);
    const inputPhone = screen.getByPlaceholderText("telefone");
    expect(inputPhone).toBeInTheDocument();
  });

  test("render password input", () => {
    render(<SignUpForm onSubmit={onSubmit} ApiError="testMock" />);
    const inputPassword = screen.getByPlaceholderText("senha");
    expect(inputPassword).toBeInTheDocument();
  });

  test("render submit button", () => {
    render(<SignUpForm onSubmit={onSubmit} ApiError="testMock" />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Cadastrar");
  });
});

describe("render form errors when they are empty", () => {
  test("render image alert error", async () => {
    render(<SignUpForm onSubmit={onSubmit} ApiError="testMock" />);
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    const errorImg = screen.getAllByLabelText("alert-img");

    expect(errorImg).toHaveLength(5);
  });

  test("render name input error", async () => {
    render(<SignUpForm onSubmit={onSubmit} ApiError="testMock" />);
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    const errorName = screen.getByText(
      "O nome precisa conter no min 6 caracteres!"
    );

    expect(errorName).toBeVisible();
  });

  test("render email input error", async () => {
    render(<SignUpForm onSubmit={onSubmit} ApiError="testMock" />);
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    const errorEmail = screen.getByText("Preencha o email por favor!");

    expect(errorEmail).toBeVisible();
  });

  test("render phone input error", async () => {
    render(<SignUpForm onSubmit={onSubmit} ApiError="testMock" />);
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    const errorPhone = screen.getByText(
      "O telefone precisa conter 11 digitos!"
    );

    expect(errorPhone).toBeVisible();
  });

  test("render password input error", async () => {
    render(<SignUpForm onSubmit={onSubmit} ApiError="testMock" />);
    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    const errorPassword = screen.getByText(
      "A senha deve conter no mín 6 caracteres!"
    );

    expect(errorPassword).toBeVisible();
  });
});

describe("handle submit form", () => {
  // TODO - como testar o onbumit do proprio form?
});
