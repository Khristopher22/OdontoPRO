// - Valor em centavos = Valor em reais * 100
// - Valor em reais = Valor em centavos / 100
// "100,00" > int (centavos)

/**
* Converte um valor monetário em reais (BRL) para centavos.
* @param {string} amount - O valor monetário em reais (BRL) a ser convertido.
* @returns {numbers} O valor convertido em centavos.
* 
* @example
* ConvertRealToCents("1.300,50"); // Retorna: 123456 cents
 */
export function convertRealToCents(amount: string) {
  const numericPrice = parseFloat(amount.replace(/\./g, '').replace(',', '.'))
  const priceInCents = Math.round(numericPrice * 100)

  return priceInCents;
}