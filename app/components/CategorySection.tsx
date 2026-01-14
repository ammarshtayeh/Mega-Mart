"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useCategories from "../hooks/use-categories";
import { getCategoryImage } from "../utils/category-images";

export default function CategorySection() {
  const router = useRouter();
  const { categories, loading } = useCategories();

  if (loading) {
    return (
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse mb-4" />
                <div className="h-4 w-24 bg-gray-200 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Shop From <span className="text-blue-600">Top Categories</span>
            </h2>
            <div className="mt-2 h-1 w-20 bg-blue-500 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories.slice(0, 6).map((category) => (
            <div
              key={category}
              onClick={() => router.push(`/category/${category}`)}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 shadow-sm">
                <img
                  src={getCategoryImage(category)}
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <h3 className="text-center text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors capitalize">
                {category.replace(/-/g, ' ')}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
