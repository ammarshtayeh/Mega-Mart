"use client";

import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  minPrice: number;
  maxPrice: number;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
}

export default function ProductFilters({
  categories,
  selectedCategory,
  onSelectCategory,
  minPrice,
  maxPrice,
  priceRange,
  onPriceChange,
  sortOption,
  onSortChange,
}: ProductFiltersProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  return (
    <div className="space-y-6">
      {/* Categories Filter */}
      <div className="border-b border-gray-200 pb-6">
        <button
          className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          <span className="font-medium text-gray-900">Category</span>
          <span className="ml-6 flex items-center">
            {isCategoryOpen ? (
              <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </span>
        </button>
        {isCategoryOpen && (
          <div className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="category-all"
                  name="category"
                  type="radio"
                  checked={selectedCategory === null}
                  onChange={() => onSelectCategory(null)}
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="category-all"
                  className="ml-3 text-sm text-gray-600 cursor-pointer"
                >
                  All Categories
                </label>
              </div>
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    id={`category-${category}`}
                    name="category"
                    type="radio"
                    checked={selectedCategory === category}
                    onChange={() => onSelectCategory(category)}
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="ml-3 text-sm text-gray-600 capitalize cursor-pointer"
                  >
                    {category.replace(/-/g, " ")}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="border-b border-gray-200 pb-6">
        <button
          className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
        >
          <span className="font-medium text-gray-900">Price</span>
          <span className="ml-6 flex items-center">
            {isPriceOpen ? (
              <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </span>
        </button>
        {isPriceOpen && (
          <div className="pt-6">
             <div className="space-y-4">
               <div className="flex items-center justify-between">
                 <span className="text-sm text-gray-600">${priceRange[0]}</span>
                 <span className="text-sm text-gray-600">${priceRange[1]}</span>
               </div>
               <input 
                 type="range" 
                 min={minPrice} 
                 max={maxPrice} 
                 value={priceRange[1]} 
                 onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
                 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
               />
             </div>
          </div>
        )}
      </div>

      {/* Sort Options - Visible on Desktop sidebar as well or keep it top only? 
          Let's keep it here for mobile view mainly or just extra controls */}
    </div>
  );
}
