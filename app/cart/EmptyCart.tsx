import React from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function EmptyCart() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-12 text-center">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <ShoppingCartIcon className="w-12 h-12 text-gray-400" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
      <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
      <Link 
        href="/"
        className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
      >
        Start Shopping
      </Link>
    </div>
  );
}
