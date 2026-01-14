import React from "react";

export interface AddToCartButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "detail";
  showIcon?: boolean;
  className?: string;
  label?: string;
  disabled?: boolean;
}

export interface QuantitySelectorProps {
  onIncrease: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDecrease: (e: React.MouseEvent<HTMLButtonElement>) => void;
  count: number;
  variant?: "primary" | "detail";
  className?: string;
  isMaxReached?: boolean;
}

export interface TopElectronicsBrandsProps {
  loading?: boolean;
}
export interface DailyEssentialsProps {
  loading?: boolean;
}