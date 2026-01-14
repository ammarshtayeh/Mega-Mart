import React from "react";
import Link from "next/link";
import { OrderSummaryProps } from "../types/cart/props";
import { formatCurrency } from "@/app/utils/currency";

export default function OrderSummary({ totalItems, totalPrice }: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8 sticky top-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
      <div className="space-y-4 mb-8">
        <div className="flex justify-between text-gray-600">
          <span>Items ({totalItems})</span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xl font-bold text-gray-900">
          <span>Total</span>
          <span className="text-blue-600">{formatCurrency(totalPrice)}</span>
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] mb-4">
        Proceed to Checkout
      </button>
      <Link 
        href="/"
        className="block w-full text-center text-gray-500 hover:text-blue-600 font-medium transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
