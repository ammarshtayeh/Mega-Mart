import React from "react";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";
import QuantitySelector from "../components/UI/QuantitySelector";
import { CartItemProps } from "../types/cart/props";
import { formatCurrency } from "@/app/utils/currency";

export default function CartItem({
  item,
  onRemove,
  onUpdateQuantity,
  onZoom,
}: CartItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
      {/* Image */}
      <div
        className="relative w-full sm:w-32 h-32 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 cursor-zoom-in group"
        onClick={() => onZoom(item.imageSrc)}
      >
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-xs font-semibold bg-white/90 px-2 py-1 rounded shadow-sm text-gray-600">
            Click to zoom
          </span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-bold text-gray-900 truncate pr-4">
            {item.name}
          </h2>
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-red-500 transition-colors p-1"
            aria-label="Remove item"
          >
            <TrashIcon className="w-6 h-6" />
          </button>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
          {item.description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="grid grid-cols-2 gap-x-8 items-start">
            <span className="text-sm text-gray-400">Unit Price</span>
            <span className="text-sm text-gray-400">Total</span>

            <div>
              <span className="text-lg font-bold text-gray-700">
                {formatCurrency(item.price)}
              </span>
              {item.originalPrice && (
                <span className="block text-sm text-gray-400 line-through">
                  {formatCurrency(item.originalPrice)}
                </span>
              )}
            </div>

            <span className="text-xl font-bold text-blue-600 ">
              {formatCurrency(item.price * item.quantity)}
            </span>

          </div>

          <QuantitySelector
            count={item.quantity}
            isMaxReached={item.quantity >= (item.stock || 999)}
            onIncrease={() =>
              onUpdateQuantity(item.id, item.quantity + 1)
            }
            onDecrease={() =>
              onUpdateQuantity(item.id, item.quantity - 1)
            }
            variant="primary"
            className="border-none bg-gray-50 h-10"
          />
        </div>
      </div>
    </div>
  );
}
