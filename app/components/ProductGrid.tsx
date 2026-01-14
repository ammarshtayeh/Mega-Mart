"use client";

import React from "react";
import CardItem from "./Card/Card";
import SkeletonCard from "./skeleton/SkeletonCard";
import useCards from "../hooks/use-cards";
import { ProductGridProps } from "../types/productgridprops";



export default function ProductGrid({ products, loading }: ProductGridProps) {
 
  const { hoveredId, setHoveredId, addToCart, updateQuantity, cartCounts } = useCards();

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i}>
            <SkeletonCard />
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-24">
        <h3 className="text-lg font-medium text-gray-900">No products found</h3>
        <p className="mt-1 text-gray-500">Try adjusting your filters or search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id}>
          <CardItem
            product={product}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
            addToCart={addToCart}
            updateQuantity={updateQuantity}
            cartCounts={cartCounts}
          />
        </div>
      ))}
    </div>
  );
}
