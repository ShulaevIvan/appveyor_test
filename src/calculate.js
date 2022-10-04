export default function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((total, item) => {
    const result = total + (item.count * item.price);
    return result;
  }, 0);

  if (applyDiscount) return sum * 0.891;

  return sum;
}
