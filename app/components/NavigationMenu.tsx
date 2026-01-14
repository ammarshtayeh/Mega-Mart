"use client";

import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavigationMenuProps } from "../types/navigation";

export default function NavigationMenu({
  categories,
  categoriesLoading,
  activeCategory,
  showCategories,
  setShowCategories,
  handleCategoryClick,
}: NavigationMenuProps) {
  return (
    <div className="flex items-center gap-8 h-full">
      <div className="relative h-full flex items-center">
        <button
          onMouseEnter={() => setShowCategories(true)}
          className="p-2 bg-blue-500 text-white rounded-lg transition-colors hover:bg-blue-600 shadow-sm"
          aria-label="All Categories"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>

        {showCategories && (
          <div
            onMouseLeave={() => setShowCategories(false)}
            className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl border border-gray-200 rounded-lg py-2 grid grid-cols-1 overflow-y-auto max-h-[70vh] z-50 animate-in fade-in slide-in-from-top-2 duration-200 custom-scrollbar"
          >
            {categoriesLoading ? (
              <div className="p-4 text-center text-gray-400">Loading...</div>
            ) : (
              categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`px-4 py-2.5 text-left text-sm transition-all capitalize border-l-4 ${
                    activeCategory === cat
                      ? "bg-blue-50 text-blue-600 border-blue-500"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-transparent hover:border-blue-500"
                  }`}
                >
                  {cat.replace(/-/g, " ")}
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
