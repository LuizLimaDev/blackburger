import MenuSlider from "@/components/Navigation/MenuSlider/MenuSlider";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Categiry menu Slide", () => {
  test("render a list of products", async () => {
    render(await MenuSlider());
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render the rigth number of list items", async () => {
    render(await MenuSlider());
    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(5);
  });
});
