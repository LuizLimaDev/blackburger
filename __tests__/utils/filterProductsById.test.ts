import productListMock from "@/components/DataDisplay/RenderProductList/__mock__/productListMock";
import filterProductsById from "@/utils/filterProductsById";
import "@testing-library/jest-dom";

const products = productListMock;
const oddProducts = 0;
const evenProducts = 1;

describe("Filter products by Id", () => {
  test("odd products filter", () => {
    const filter = filterProductsById(products, oddProducts);
    expect(filter).toHaveLength(1);
  });

  test("even products filter", () => {
    const filter = filterProductsById(products, evenProducts);
    expect(filter).toHaveLength(2);
  });
});
