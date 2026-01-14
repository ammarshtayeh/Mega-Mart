import React from "react";
import AddToCartButton from "../UI/AddToCartButton";
import QuantitySelector from "../UI/QuantitySelector";
import { ProductInfoProps } from "../../types/product-detail";

export default function ProductInfo({
  category = "General",
  brand,
  title = "Untitled Product",
  rating,
  reviewsCount = 0,
  price,
  discounted,
  discount,
  description = "No description available for this product.",
  currentCount,
  stock = 0,
  onAddToCart,
  onIncrease,
  onDecrease,
}: ProductInfoProps) {
  return (
    <div className="p-8 lg:p-12 flex flex-col">
     
      <div className="mb-2">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold tracking-wide uppercase">
          {category}
        </span>
        {brand ? (
          <span className="ml-2 inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold tracking-wide uppercase">
            {brand}
          </span>
        ) : null}
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        {title}
      </h1>

      
      <div className="flex items-center mb-6">
        <div className="flex items-center text-yellow-400 mr-2">
          <span className="text-xl font-bold text-gray-900 mr-1">
            {rating ? rating : "N/A"}
          </span>
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>
        <span className="text-gray-400 text-sm">({reviewsCount} reviews)</span>
      </div>

      
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-4xl font-extrabold text-[#2B9BCF]">
          ${discounted.toFixed(2)}
        </span>
        
        {discount > 0 ? (
          <>
            <span className="text-xl text-gray-400 line-through decoration-[#FF4D4D]/40">
              ${price.toFixed(2)}
            </span>
            <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded mb-2">
              {discount}% OFF
            </span>
          </>
        ) : null}
      </div>


      <p className="text-gray-600 text-lg leading-relaxed mb-8 border-b border-gray-100 pb-8">
        {description}
      </p>


      <div className="mt-auto">
        {currentCount > 0 ? (
          <div className="mb-4">
            <QuantitySelector
              count={currentCount}
              variant="detail"
              isMaxReached={currentCount >= (stock || 0)}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          </div>
        ) : (
          <AddToCartButton
            variant="detail"
            showIcon
            disabled={!stock || stock <= 0}
            onClick={() => onAddToCart(1)}
            label="Add to Cart"
          />
        )}
      </div>
    </div>
  );
}
