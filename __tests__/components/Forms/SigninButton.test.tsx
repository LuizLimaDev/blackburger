import SignInButton from "@/components/Forms/SignInForm/SignInButton";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      replace: () => null,
    };
  },
}));

describe("render the button", () => {
  test("render the container", () => {
    render(
      <SignInButton img="/teste" alt="alt" provider="provider">
        Facebook
      </SignInButton>
    );
    const container = screen.getByLabelText("login container");
    expect(container).toBeInTheDocument();
  });

  test("render the image", () => {
    render(
      <SignInButton img="/teste" alt="alt" provider="provider">
        Facebook
      </SignInButton>
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  test("render the button", () => {
    render(
      <SignInButton img="/teste" alt="alt" provider="provider">
        Facebook
      </SignInButton>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "font-lilita text-gray-bb-100 drop-shadow-bb-1 cursor-pointer"
    );
    expect(button).toHaveTextContent("Facebook");
  });
});
