export default function useOpenShop(date = new Date()) {
  const format = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "America/Sao_Paulo",
  }).format(date);
  const weekDay = format.split(" ")[0];
  const hours = format.split(" ")[7];
  const currentHour = hours.split(":")[0];

  let isOpen: boolean = false;

  if (
    currentHour >= "18" &&
    currentHour <= "24" &&
    weekDay !== "segunda-feira"
  ) {
    isOpen = true;
  }

  return isOpen;
}
