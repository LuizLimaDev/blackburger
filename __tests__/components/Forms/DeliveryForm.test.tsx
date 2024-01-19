import DeliveryForm from "@/components/Forms/DeliveryForm/DeliveryForm";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const onSubmit = jest.fn();

describe("Render form to delivery products", () => {
  test("render the form title", () => {
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);

    const h1 = screen.getByRole("heading");

    expect(h1).toBeInTheDocument();
    expect(h1).toHaveClass("bb-title text-2xl text-center capitalize");
    expect(h1).toHaveTextContent("Dados de entrega");
  });

  test("render cep input", () => {
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);

    const cepInput = screen.getByPlaceholderText("cep");

    expect(cepInput).toBeInTheDocument();
    expect(cepInput).toHaveClass("modal-input");
  });

  test("render adress input", () => {
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);

    const adressInput = screen.getByPlaceholderText("endereço");

    expect(adressInput).toBeInTheDocument();
    expect(adressInput).toHaveClass("modal-input");
  });

  test("render number input", () => {
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);

    const numberInput = screen.getByPlaceholderText("número");

    expect(numberInput).toBeInTheDocument();
    expect(numberInput).toHaveClass("modal-input");
  });

  test("render complement input", () => {
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);

    const complementInput = screen.getByPlaceholderText("complemento");

    expect(complementInput).toBeInTheDocument();
    expect(complementInput).toHaveClass("modal-input");
  });

  test("render cpf input", () => {
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);

    const cpfInput = screen.getByPlaceholderText("cpf");

    expect(cpfInput).toBeInTheDocument();
    expect(cpfInput).toHaveClass("modal-input");
  });

  test("render phone input", () => {
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);

    const phoneInput = screen.getByPlaceholderText("telefone");

    expect(phoneInput).toBeInTheDocument();
    expect(phoneInput).toHaveClass("modal-input");
  });

  test("render select input", () => {
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);

    const selectInput = screen.getByRole("combobox");

    expect(selectInput).toBeInTheDocument();
    expect(selectInput).toHaveClass("h-[40px] w-full");
  });

  test("render the options of select input", () => {
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(4);
  });

  test("render arrow down of select input", () => {
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);

    const img = screen.getByAltText("selecionar método de pagamento");
    expect(img).toBeInTheDocument();
  });

  test("render button send", () => {
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Enviar");
    expect(button).toHaveClass("bb-button");
  });
});

describe("render form errors", () => {
  test("render errors when inputs are empty", async () => {
    const user = userEvent.setup();
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);
    await user.click(screen.getByRole("button"));

    const cepErrorMsg = await screen.findByText(
      "Preencha o campo CEP por favor!"
    );
    const adressErrorMsg = await screen.findByText(
      "Preencha o endereço por favor!"
    );
    const numberErrorMsg = await screen.findByText(
      "Preencha o número da residência!"
    );
    const cpfErrorMsg = await screen.findByText("Preencha o CPF por favor!");
    const phoneErrorMsg = await screen.findByText(
      "Preencha o campo telefone com o DDD!"
    );
    const paymentMethodErrorMsg = await screen.findByText(
      "Selecione um tipo de pagamento!"
    );

    expect(cepErrorMsg).toBeVisible();
    expect(adressErrorMsg).toBeVisible();
    expect(numberErrorMsg).toBeVisible();
    expect(cpfErrorMsg).toBeVisible();
    expect(phoneErrorMsg).toBeVisible();
    expect(paymentMethodErrorMsg).toBeVisible();
  });

  test("render min length errors", async () => {
    const user = userEvent.setup();
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);
    const cepInput = screen.getByPlaceholderText("cep");
    const numberInput = screen.getByPlaceholderText("número");
    const cpfInput = screen.getByPlaceholderText("cpf");
    const phoneInput = screen.getByPlaceholderText("telefone");
    await user.type(cepInput, "123");
    await user.type(numberInput, "1");
    await user.type(cpfInput, "38016999");
    await user.type(phoneInput, "1198811000");
    await user.click(screen.getByRole("button"));

    const cepErrorMsg = await screen.findByText("O CEP deve conter 8 digitos!");
    const numberErrorMsg = await screen.findByText(
      "O número deve conter ao menos 2 digitos!"
    );
    const cpfErrorMsg = await screen.findByText(
      "O CPF deve conter no mín 11 caracteres!"
    );
    const phoneErrorMsg = await screen.findByText(
      "O telefone deve conter no mín 9 caracteres!"
    );

    expect(cepInput).toHaveValue("123");
    expect(numberInput).toHaveValue("1");
    expect(cpfInput).toHaveValue("380.169.99");
    expect(phoneInput).toHaveValue("(11)98811-000");
    expect(cepErrorMsg).toBeVisible();
    expect(numberErrorMsg).toBeVisible();
    expect(cpfErrorMsg).toBeVisible();
    expect(phoneErrorMsg).toBeVisible();
  });
});

describe("submit form data", () => {
  const user = userEvent.setup();
  test("form is sending de rigth data", async () => {
    const formData = {
      cep: "17014-456",
      adress: "rua teste",
      number: 140,
      complement: "",
      cpf: "123.456.789-01",
      phone: "(11)98845-1234",
      paymentMethod: "Pix",
    };
    render(<DeliveryForm onSubmit={onSubmit} orderSended={false} />);
    await user.type(screen.getByPlaceholderText("cep"), formData.cep);
    await user.type(screen.getByPlaceholderText("endereço"), formData.adress);
    await user.type(
      screen.getByPlaceholderText("número"),
      String(formData.number)
    );
    await user.type(screen.getByPlaceholderText("cpf"), formData.cpf);
    await user.type(screen.getByPlaceholderText("telefone"), formData.phone);
    await user.selectOptions(
      screen.getByRole("combobox"),
      formData.paymentMethod
    );
    await user.click(screen.getByRole("button"));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(
      {
        cep: "17014-456",
        adress: "rua teste",
        number: 140,
        complement: "",
        cpf: "123.456.789-01",
        phone: "(11)98845-1234",
        paymentMethod: "Pix",
      },
      expect.anything()
    );
  });
});
