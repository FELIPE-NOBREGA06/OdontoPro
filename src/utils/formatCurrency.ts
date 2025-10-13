<<<<<<< HEAD
import { Currency } from "lucide-react";
=======
>>>>>>> 6328a0a (att)

const CURRENCY_FORMATTER = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
<<<<<<< HEAD
  minimumFractionDigits: 0,
});

export function foramtCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
=======
  minimumFractionDigits: 0
})

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}
>>>>>>> 6328a0a (att)
