"use client";
import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

import { QuantitySelectorProps } from "../../types/ui";

export default function QuantitySelector({
  onIncrease,
  onDecrease,
  count,
  variant = "primary",
  className = "",
  isMaxReached = false,
}: QuantitySelectorProps) {
  return (
    <div
      className={`${
        variant === "detail" ? "w-full flex justify-between" : "flex"
      } items-center bg-gray-100 rounded-lg overflow-hidden border border-blue-200 transition-all duration-300 ${className}`}
    >
      <button
        onClick={onDecrease}
        disabled={count <= 1}
        className={`${
          variant === "detail" ? "p-4" : "px-3 py-1"
        } hover:bg-blue-100 text-blue-600 disabled:text-gray-300 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors flex items-center justify-center`}
        aria-label="Decrease quantity"
      >
        <MinusIcon
          className={`${variant === "detail" ? "w-6 h-6" : "w-4 h-4"} stroke-2`}
        />
      </button>
      <span
        className={`${
          variant === "detail" ? "text-xl px-8" : "px-4 text-sm"
        } font-bold text-gray-800 tabular-nums`}
      >
        {count}
      </span>
      <button
        onClick={onIncrease}
        disabled={isMaxReached}
        className={`${
          variant === "detail" ? "p-4" : "px-3 py-1"
        } hover:bg-blue-100 text-blue-600 disabled:text-gray-300 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors flex items-center justify-center`}
        aria-label="Increase quantity"
      >
        <PlusIcon
          className={`${variant === "detail" ? "w-6 h-6" : "w-4 h-4"} stroke-2`}
        />
      </button>
    </div>
  );
}
