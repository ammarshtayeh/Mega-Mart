"use client";
import React from "react";
import CardItem from "./Card/Card";
import useCarts from "../hooks/useCards";
import useCategoryProducts from "../hooks/useCategoryProducts";
import CategoryProductsSkeleton from "./skeleton/CategoryProductsSkeleton";
import { CategoryProductsProps } from "../types/CategoryProducts.types";

export default function CategoryProducts({ category }: CategoryProductsProps) {
  const { products, loading } = useCategoryProducts(category);
  const { hoveredId, setHoveredId, addToCart, updateQuantity, cartCounts } = useCarts();

  if (loading) {
    return <CategoryProductsSkeleton />;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-medium text-gray-500">
          No products found for this category.
        </h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <CardItem
          key={product.id}
          product={product}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
          cartCounts={cartCounts}
        />
      ))}
    </div>
  );
}
