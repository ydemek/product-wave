export default function formatPrice(amount: number): string {
    const formattedPrice = amount.toLocaleString("tr-TR", {
      style: "currency",
      currency: "TRY",
    });
    return formattedPrice.replace("₺", "");
  }