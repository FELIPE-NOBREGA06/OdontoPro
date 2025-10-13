<<<<<<< HEAD
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
=======
// - Valor em centavos = Valor em reais * 100
// - Valor em reais = Valor em centavos / 100


/**
* Converte um valor monetário em reais (BRL) para centavos.
* @param {string} amount - O valor monetário em reais (BRL) a ser convertido.
* @returns {number} O valor convertido em centavos.
* 
* @example
* convertRealToCents("1.300,50"); // Retorna: 123456 cents
*/
export function convertRealToCents(amount: string) {
  const numericPrice = parseFloat(amount.replace(/\./g, '').replace(',', '.'))
  const priceInCents = Math.round(numericPrice * 100)

  return priceInCents;
}
>>>>>>> 6328a0a (att)
