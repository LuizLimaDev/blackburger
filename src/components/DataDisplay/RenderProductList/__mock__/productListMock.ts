import { TProduct } from "@/types/products";

const productListMock: TProduct[] = [
  {
    id: 1,
    img: "/test.svg",
    name: "test",
    description: "test description",
    price: 1000,
    category_id: 1,
  },
  {
    id: 2,
    img: "/test2.svg",
    name: "test2",
    description: "test2 description",
    price: 2000,
    category_id: 2,
  },
  {
    id: 3,
    img: "/test3.svg",
    name: "test3",
    description: "test3 description",
    price: 3000,
    category_id: 3,
  },
];

export default productListMock;
