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
  const timestamp = new Date(currentOrder.created_at);
  const formattedTimestamp = new Intl.DateTimeFormat("pt-BR", {
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
  const currentOrderDate = formattedTimestamp.split(",")[0];
  const currentOrderTime = formattedTimestamp.split(",")[1];
  const currentProducts = products.map((product) => {
    return `\r\n   ${product.quantity}x ${product.name} R$ ${priceConvert(
      product.price * product.quantity
    )}`;
  });

  // whats app msg object
  const text = `*Black Burger Hamburgueria*\r\n\r\n*pedido:* ${
    currentOrder.id
  }\r\n*nome:* ${user.name}\r\n*email:* ${user.email}\r\n*telefone:* ${
    delivery_info.phone
  }\r\n*produtos:* {${currentProducts}\r\n}\r\n*informações de entrega:* {\r\n   rua: ${
    delivery_info.adress
  }\r\n   número: ${delivery_info.number}\r\n${
    delivery_info.complement &&
    `   complemento: ${delivery_info.complement}\r\n`
  }}\r\n*valores:* {\r\n   valor: R$ ${priceConvert(
    orderPrices.cartSubtotal
  )}\r\n   taxa de entrega: R$ ${priceConvert(
    orderPrices.tax
  )}\r\n   desconto: R$ ${priceConvert(
    orderPrices.cartDiscount
  )}\r\n   total geral: R$ ${priceConvert(
    orderPrices.cartTotalPrice
  )}\r\n}\r\n*horário do pedido:* ${currentOrderTime}\r\n*data:* ${currentOrderDate}\r\n\r\nAgradecemos o seu pedido!`;

  // URI text encode
  const shopPhone = "14988116402";
  const encodeText = encodeURIComponent(text);
  const whatsMsg = `https://wa.me//+55${shopPhone}?text=${encodeText}`;

  return whatsMsg;
}
