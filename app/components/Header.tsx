"use client";

import useHeader from "@/app/hooks/use-header";
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
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import useCategories from "@/app/hooks/use-categories";
import NavigationMenu from "./NavigationMenu";
import { useAuth } from "@/app/hooks/use-auth";

export default function Header() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    toggleMenu,
    activeCategory,
    setActiveCategory,
    showCategories,
    setShowCategories,
    toggleCategories,
    handleCategoryClick,
    router,
    searchQuery,
    handleSearchChange
  } = useHeader();
  const { categories, loading: categoriesLoading } = useCategories();
  const { user, isAuthenticated, logout } = useAuth();
  
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-40">
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
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <NavigationMenu 
                categories={categories}
                categoriesLoading={categoriesLoading}
                activeCategory={activeCategory}
                showCategories={showCategories}
                setShowCategories={setShowCategories}
                handleCategoryClick={handleCategoryClick}
              />
            </div>

            <Link href="/" className="text-2xl md:text-3xl font-bold text-blue-500 hover:opacity-80 transition-opacity">
              MegaMart
            </Link>

            {/* Featured Categories list - now after logo */}
            <div className="hidden lg:flex items-center gap-5 overflow-x-auto scrollbar-hide ml-2">
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`text-sm font-medium whitespace-nowrap transition-all capitalize relative py-1 ${
                    activeCategory === cat
                      ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {cat.replace(/-/g, " ")}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden sm:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for what you want..."
                className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <div 
                  onClick={() => router.push('/profile')}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-500 group transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 group-hover:border-blue-500">
                    <img src={user?.image} alt={user?.firstName} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-medium whitespace-nowrap">{user?.firstName}</span>
                </div>
                <button 
                  onClick={logout}
                  className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div 
                onClick={() => router.push('/login')}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer"
              >
                <UserIcon className="w-6 h-6" />
                <span className="font-medium whitespace-nowrap">Sign Up/Sign In</span>
              </div>
            )}
            <button
              onClick={() => router.push('/cart')}
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
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col gap-1">
              <div className="mb-4 bg-gray-50 rounded-xl p-4">
                {isAuthenticated ? (
                  <div className="flex flex-col gap-3">
                    <div 
                      onClick={() => {
                        router.push('/profile');
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-4 text-gray-800 hover:text-blue-500 w-full transition-colors cursor-pointer"
                    >
                      <div className="bg-white p-1 rounded-full shadow-sm border border-gray-100">
                        <img src={user?.image} alt={user?.firstName} className="w-10 h-10 rounded-full" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-500">Welcome,</p>
                        <span className="font-semibold text-base">{user?.firstName} {user?.lastName}</span>
                      </div>
                    </div>
                    <button 
                      onClick={logout}
                      className="text-sm font-medium text-red-500 bg-red-50 py-2 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div 
                    onClick={() => {
                      router.push('/login');
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-4 text-gray-800 hover:text-blue-500 w-full transition-colors cursor-pointer"
                  >
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <UserIcon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-500">Welcome,</p>
                      <span className="font-semibold text-base">Sign Up/Sign In</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button 
                  onClick={() => router.push('/cart')} 
                  className="flex flex-col items-center justify-center gap-2 bg-blue-50 p-4 rounded-xl border border-blue-100 text-blue-600 active:scale-95 transition-transform"
                >
                  <div className="relative">
                    <ShoppingCartIcon className="w-6 h-6" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                        {totalItems}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">My Cart</span>
                </button>
                
                <button 
                  onClick={toggleCategories}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all active:scale-95 ${
                    showCategories ? 'bg-blue-600 border-blue-600 text-white' : 'bg-gray-50 border-gray-100 text-gray-700'
                  }`}
                >
                  <Bars3Icon className="w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-wider">Categories</span>
                </button>
              </div>
              
              {/* Categories Dropdown Content */}
              {showCategories && (
                <div className="mb-6 bg-gray-50 rounded-xl p-4 animate-in slide-in-from-top-4 duration-300">
                  <div className="grid grid-cols-2 gap-2 max-h-[40vh] overflow-y-auto custom-scrollbar pr-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={`text-left px-3 py-2 text-sm transition-all capitalize border rounded-lg ${
                          activeCategory === cat
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "text-gray-600 hover:text-blue-600 hover:bg-white border-transparent hover:border-blue-100"
                        }`}
                      >
                        {cat.replace(/-/g, ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Divider & Other Links */}
              <div className="space-y-1 pt-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 mb-2">Support & Info</p>
                
                <button className="flex items-center gap-4 text-gray-700 hover:text-blue-500 py-3 px-2 w-full active:bg-gray-50 rounded-lg transition-colors">
                  <MapPinIcon className="w-5 h-5 text-gray-400" />
                  <div className="text-left flex-1">
                    <p className="text-xs text-gray-400">Deliver to</p>
                    <span className="text-sm font-medium">Nablus, Palestine</span>
                  </div>
                </button>

                <button className="flex items-center gap-4 text-gray-700 hover:text-blue-500 py-3 px-2 w-full active:bg-gray-50 rounded-lg transition-colors">
                  <TruckIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium">Track your order</span>
                </button>

                <button className="flex items-center gap-4 text-gray-700 hover:text-blue-500 py-3 px-2 w-full active:bg-gray-50 rounded-lg transition-colors">
                  <TagIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium">All Offers</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
