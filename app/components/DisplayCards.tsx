"use client";
import React from 'react';
import useCarts from '../hooks/useCards';
import CardItem from './Card/Card';
import SkeletonCard from './skeleton/SkeletonCard';
export default function Cards() {
  const { items, hoveredId, setHoveredId, showAll, toggleShowAll, cartCounts, addToCart, updateQuantity, loading } = useCarts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">the products of <span className="text-blue-500">our website</span></h2>
            <div className="mt-2 h-1 w-40 bg-blue-300 rounded" />
          </div>
          <button
            onClick={toggleShowAll}
            className="text-sm text-gray-500 hover:text-blue-500 flex items-center gap-2"
          >
            {showAll ? 'View Some' : 'View All'} <span className="text-blue-500">{showAll ? '<' : '>'}</span>
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <SkeletonCard />
              </div>
            ))}
          </div>
        ) : (
          <div className={showAll ? '' : 'py-6'}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {(showAll ? items : items.slice(0, 4)).map((product) => (
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
          </div>
        )}
      </div>
    </div>
  );
}
  