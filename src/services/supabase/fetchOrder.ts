"use server";

import { TCartProduct } from "@/types/cart";
import supabase from "./supabase";
import { TDeliveryData } from "@/components/Forms/DeliveryForm/DeliveryForm";
import { TOrder, TPrices } from "@/types/delivery";
import priceConvert from "@/utils/priceConvert";

export default async function fetchOrder(
  userEmail: string | undefined,
  products: TCartProduct[],
  delivery_info: TDeliveryData,
  orderPrices: TPrices
) {
  // select user id from db
  const { data: user, error } = await supabase
    .from("users")
    .select()
    .eq("email", userEmail)
    .single();

  if (error) throw Error("Usuário não encontrado no banco de dados!");

  // registering user order
  const { data: orderData, error: orderError } = await supabase
    .from("user_order")
    .insert({
      user_id: user.id,
      cep: delivery_info.cep,
      adress: delivery_info.adress,
      number: delivery_info.number,
      complement: delivery_info.complement,
      phone: delivery_info.phone,
      price: orderPrices.cartSubtotal,
      discount: orderPrices.cartDiscount,
      tax: orderPrices.tax,
      total_price: orderPrices.cartTotalPrice,
      payment_type: delivery_info.payment_type,
    })
    .select()
    .single();

  if (orderError) console.log(orderError);

  const currentOrderId: number = orderData.id;
  const currentOrder: TOrder = orderData;

  //  registering order_item of products
  const { error: orderItemError } = await supabase.from("order_item").insert(
    products.map((product) => {
      return {
        order_id: currentOrderId,
        product_id: product.id,
        quantity: product.quantity,
      };
    })
  );

  if (orderItemError) console.log(orderItemError);

  // registering all order_items in user_order
  const { data: orderItems, error: orderItemsError } = await supabase
    .from("order_item")
    .select()
    .eq("order_id", currentOrderId);

  if (orderItemsError) console.log(orderItemsError);

  const { data: finalOrder, error: finalOrderError } = await supabase
    .from("user_order")
    .update({ order_items: orderItems?.map((item) => item.id) })
    .eq("id", currentOrderId)
    .select();

  if (finalOrderError) console.log(finalOrderError);

  // db timestamp convert
  const timestamp: Date = new Date(currentOrder.created_at);
  const formattedTimestamp: string = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3,
    hour12: false,
    timeZone: "UTC",
  }).format(timestamp);
  const currentOrderDate: string = formattedTimestamp.split(",")[0];
  const currentOrderTime: string = formattedTimestamp.split(",")[1];
  const currentProducts: string[] = products.map((product) => {
    return `\r\n   ${product.quantity}x ${product.name} - R$ ${priceConvert(
      product.price * product.quantity
    )}`;
  });

  // whats app msg object
  const text: string = `*Black Burger Hamburgueria*\r\n\r\n*Número do pedido:* ${
    currentOrder.id
  }\r\n*Nome:* ${user.name}\r\n*Telefone:* ${
    delivery_info.phone
  }\r\n\r\n----------------------------------------\r\n\r\n*Produtos:* ${currentProducts}\r\n\r\n----------------------------------------\r\n\r\n*Informações de entrega:* \r\n   Rua: ${
    delivery_info.adress
  }\r\n   Número: ${delivery_info.number}\r\n${
    delivery_info.complement &&
    `   Complemento: ${delivery_info.complement}\r\n`
  }\r\n----------------------------------------\r\n\r\n*Valores:* \r\n   Subtotal: R$ ${priceConvert(
    orderPrices.cartSubtotal
  )}\r\n   Taxa de entrega: R$ ${priceConvert(
    orderPrices.tax
  )}\r\n   Desconto: R$ ${priceConvert(
    orderPrices.cartDiscount
  )}\r\n   *Total geral:* R$ ${priceConvert(
    orderPrices.cartTotalPrice
  )}\r\n\r\n----------------------------------------\r\n\r\n*Horário do pedido:* ${currentOrderTime}\r\n*Data:* ${currentOrderDate}\r\n\r\nAgradecemos o seu pedido!`;

  // URI text encode
  const shopPhone: string = delivery_info.phone;
  const regexPattern: RegExp = /([0-9])\w+/g;
  const formatedPhone: string = shopPhone.match(regexPattern)!.join("");

  const encodeText: string = encodeURIComponent(text);
  const whatsMsg: string = `https://wa.me//+55${formatedPhone}?text=${encodeText}`;

  return whatsMsg;
}
