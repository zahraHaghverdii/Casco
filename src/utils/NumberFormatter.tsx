interface NumberFormatterProps {
  value: number; // عدد ورودی
}

export default function NumberFormatter({ value }: NumberFormatterProps) {
  const formattedNumber = value.toLocaleString("en-US"); // فرمت کردن عدد

  return <span>{formattedNumber}</span>;
}

export function formatNumber(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
