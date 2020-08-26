export default function usePriceFormater(currency = 'AR', price = 0) {
  const priceFormated = price.toLocaleString('es-ar', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2
  });

  return `$${priceFormated.substring(2, priceFormated.length + 1)}`;
}
