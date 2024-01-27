export type TPrices = {
  cartSubtotal: number;
  cartDiscount: number;
  tax: number;
  cartTotalPrice: number;
};

export type TOrder = {
  id: number;
  user_id: string;
  cep: string;
  adress: string;
  number: number;
  complement: string;
  phone: string;
  created_at: Date;
  price: number;
  discount: number;
  tax: number;
  total_price: number;
  payment_type: string;
};
