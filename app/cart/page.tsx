"use client";

import React from "react";
import Header from "../components/Header";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import ZoomModal from "./ZoomModal";
import useCart from "../hooks/use-cart";

import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function CartPage() {
  const {
    cartItems,
    totalPrice,
    totalItems,
    zoomedImage,
    handleRemove,
    handleUpdateQuantity,
    handleZoom,
    closeZoom,
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/" 
            className="p-2 bg-white rounded-full shadow-sm text-gray-600 hover:text-blue-500 hover:shadow-md transition-all group"
            title="Back to Shop"
          >
            <ArrowLeftIcon className="w-6 h-6 group-active:scale-90 transition-transform" />
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onRemove={handleRemove}
                  onUpdateQuantity={handleUpdateQuantity}
                  onZoom={handleZoom}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <OrderSummary totalItems={totalItems} totalPrice={totalPrice} />
            </div>
          </div>
        )}
      </main>

      {zoomedImage && (
        <ZoomModal imageSrc={zoomedImage} onClose={closeZoom} />
      )}
    </div>
  );
}
