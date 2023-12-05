export default function priceConvert(price: number): string {
  return String((price / 100).toFixed(2));
}
