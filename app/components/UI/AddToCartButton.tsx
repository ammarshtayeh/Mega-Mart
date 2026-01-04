"use client";
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { AddToCartButtonProps } from "../../types/ui";

export default function AddToCartButton({ 
  onClick, 
  variant = "primary", 
  showIcon = false,
  className = "",
  label = "Add to Cart"
}: AddToCartButtonProps) {
  
  const baseClasses = "transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm h-9 min-w-[100px]",
    detail: "w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      aria-label={label}
    >
      {showIcon && <ShoppingCartIcon className={variant === 'detail' ? "w-6 h-6" : "w-4 h-4"} />}
      {label}
    </button>
  );
}
