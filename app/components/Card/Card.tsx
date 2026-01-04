"use client";
import React from "react";
import SkeletonCard from "../skeleton/SkeletonCard";
import AddToCartButton from "../UI/AddToCartButton";
import QuantitySelector from "../UI/QuantitySelector";
import { CardProps } from "../../types/card";
import { useRouter } from "next/navigation";
import Image from "next/image"; 

export default function CardItem({
  product,
  hoveredId,
  setHoveredId,
  addToCart,
  updateQuantity,
  cartCounts,
  isLoading,
}: CardProps & { isLoading?: boolean }) {
  const router = useRouter();

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <div
      onMouseEnter={() => setHoveredId(product.id)}
      onMouseLeave={() => setHoveredId(null)}
      className="relative w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-lg hover:border-blue-200 transition-all"
    >
      {product.discount && (
        <div className="absolute top-3 right-3">
          <div className="bg-[#0ea5e9] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.discount}
          </div>
        </div>
      )}

      <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 h-36 md:h-44 lg:h-48">
        {product.imageSrc ? (
          <div className="relative w-full h-full"> 
          <Image
            src={
              hoveredId === product.id && product.secondImage
                ? product.secondImage
                : product.imageSrc
            }
            alt={product.imageAlt}
            onClick={() => router.push(`/products/${product.id}`)}
            fill
            className="object-contain cursor-pointer"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          </div>
        ) : (
          <div className="h-24 w-24 bg-gray-200 rounded" />
        )}
      </div>

      <h3 className="mt-4 text-sm md:text-base text-gray-700 truncate">
        {product.name}
      </h3>

      <div className="mt-2">
        <div className="text-lg md:text-xl font-semibold text-gray-900">
          {product.price}
        </div>
        {product.originalPrice && (
          <div className="text-sm text-gray-400 line-through">
            {product.originalPrice}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        {product.save && product.save !== '$0' && (
          <div className="text-sm text-green-600 font-semibold">
            Save - {product.save}
          </div>
        )}
        <div className="flex items-center gap-2">
           {cartCounts[product.id] > 0 ? (
             <QuantitySelector
                count={cartCounts[product.id]}
                onIncrease={() => updateQuantity(product.id, (cartCounts[product.id] || 0) + 1)}
                onDecrease={() => updateQuantity(product.id, (cartCounts[product.id] || 0) - 1)}
             />
           ) : (
            <AddToCartButton
              onClick={() => addToCart(product.id, 1)}
              label="Add to cart"
            />
           )}
         </div>
      </div>
    </div>
  );
}
