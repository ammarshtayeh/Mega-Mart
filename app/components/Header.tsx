"use client";

import useHeader from "@/app/hooks/useHeader";
import CartModal from "@/app/components/CartModal";
import { useAppSelector } from "@/app/store/hooks";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  TruckIcon,
  TagIcon,
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CATEGORIES } from "@/app/utils/mock-categories";

export default function Header() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    toggleMenu,
    activeCategory,
    setActiveCategory,
    isCartOpen,
    toggleCart,
  } = useHeader();
  
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <header className="w-full bg-white shadow-sm">
      <div className="bg-gray-100 border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Welcome to worldwide Megamart!</span>
            <div className="flex items-center gap-9">
              <button className="flex items-center gap-2 hover:text-blue-500">
                <MapPinIcon className="w-4 h-4" />
                <span>
                  location <strong>Nablus</strong>
                </span>
              </button>
              <button className="flex items-center gap-2 hover:text-blue-500">
                <TruckIcon className="w-4 h-4" />
                <span>Tracking order</span>
              </button>
              <button className="flex items-center gap-2 hover:text-blue-500">
                <TagIcon className="w-4 h-4" />
                <span> Offers</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
              MegaMart
            </h1>
          </div>

          <div className="hidden sm:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for what you want..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
              <UserIcon className="w-6 h-6" />
              <span className="font-medium">Sign Up/Sign In</span>
            </button>
            <button
              onClick={toggleCart}
              aria-label="Open cart"
              className="p-2 text-gray-700 hover:text-blue-500 rounded relative"
            >
              <ShoppingCartIcon className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <button onClick={toggleMenu} className="p-2 hover:bg-gray-100 rounded-lg md:hidden">
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-700" />            
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-700" />
              
            )}
          </button>
        </div>

        <div className="sm:hidden mt-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-3 text-gray-700 hover:text-blue-500 py-2">
                <UserIcon className="w-6 h-6" />
                <span className="font-medium">Sign Up/Sign In</span>
              </button>
              <button 
                onClick={toggleCart} 
                aria-label="Open cart" 
                className="p-2 text-gray-700 hover:text-blue-500 rounded py-2 relative w-fit"
              >
                <div className="relative">
                  <ShoppingCartIcon className="w-6 h-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                      {totalItems}
                    </span>
                  )}
                </div>
              </button>
              <div className="border-t border-gray-200 my-2"></div>
              <button className="flex items-center gap-3 text-gray-700 hover:text-blue-500 py-2">
                <MapPinIcon className="w-5 h-5" />
                <span>
                  Deliver to <strong>423651</strong>
                </span>
              </button>
              <button className="flex items-center gap-3 text-gray-700 hover:text-blue-500 py-2">
                <TruckIcon className="w-5 h-5" />
                <span>Track your order</span>
              </button>
              <button className="flex items-center gap-3 text-gray-700 hover:text-blue-500 py-2">
                <TagIcon className="w-5 h-5" />
                <span>All Offers</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-4 md:px-6 py-2 rounded-full whitespace-nowrap font-medium transition-colors text-sm md:text-base ${
                  activeCategory === category.slug
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <CartModal isOpen={isCartOpen} onClose={toggleCart} />
      </div>
    </header>
  );
}
