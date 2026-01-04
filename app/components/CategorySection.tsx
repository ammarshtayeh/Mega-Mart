"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "../utils/mock-categories";

export default function CategorySection() {
  const router = useRouter();

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
          <button 
            onClick={() => router.push("/categories")}
            className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center gap-1"
          >
            View All <span>&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => router.push(`/category/${category.slug}`)}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-transparent group-hover:border-blue-500 transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
