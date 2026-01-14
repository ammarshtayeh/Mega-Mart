
export const formatCurrency = (amount: number, currency: string = '$'): string => {
  return `${currency}${amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};


export const parseCurrency = (value: string): number => {
  return parseFloat(value.replace(/[^0-9.-]+/g, "")) || 0;
};
