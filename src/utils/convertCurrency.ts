/**
 * converte um valor monetario em reais para centavos
 * @param {string} amount - o valor monétario em reais a ser convertido
 * @return {number} o valor convertido em centavos
 *
 * @example
 * ConvertRealTocents ('1.300,50); // Returna: 123456 cents
 */

export function converRealToCents(amount: string) {
  const numericPrice = parseFloat(amount.replace(/\./g, "").replace(",", "."));
  const priceIncents = Math.round(numericPrice * 100);

  return priceIncents;
}
