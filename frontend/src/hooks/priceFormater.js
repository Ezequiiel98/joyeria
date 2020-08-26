export default function usePriceFormater(price = 0, currency = 'ARS') {
  const priceFormated = price.toLocaleString('es-ar', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2
  });

  return `$${priceFormated.substring(2, priceFormated.length + 1)}`;
}
