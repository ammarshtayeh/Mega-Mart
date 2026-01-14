"use client";

import { useAuth } from '@/app/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { 
  UserIcon, 
  EnvelopeIcon, 
  IdentificationIcon, 
  ArrowLeftOnRectangleIcon, 
  ShoppingBagIcon,
  HeartIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import { useAppSelector } from '@/app/store/hooks';
import Header from '../components/Header';

export default function ProfilePage() {
  const { user, isAuthenticated, logout, loading } = useAuth();
  const cartItems = useAppSelector((state) => state.cart.items);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="h-48 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 relative">
            <div className="absolute -bottom-16 left-8">
              <div className="p-1 bg-white rounded-full shadow-lg">
                <img 
                  src={user?.image} 
                  alt={user?.firstName} 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white bg-gray-50"
                />
              </div>
            </div>
            <div className="absolute top-6 right-8">
              <button 
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all border border-white/20 text-sm font-medium"
              >
                <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>

          <div className="pt-20 pb-12 px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 capitalize">
                  {user?.firstName} {user?.lastName}
                </h1>
                <p className="text-gray-500 font-medium">@{user?.username}</p>
              </div>
              <div className="flex items-center gap-3">
                <div 
                  onClick={() => router.push('/cart')}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/30 transition-all font-semibold cursor-pointer"
                >
                  <ShoppingBagIcon className="w-5 h-5" />
                  My Orders
                </div>
                <button className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-2xl transition-all border border-gray-100">
                  <Cog6ToothIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Account Details */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <IdentificationIcon className="w-6 h-6 text-blue-500" />
                  Account Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="p-3 bg-white rounded-xl text-blue-500 shadow-sm">
                      <EnvelopeIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email Address</p>
                      <p className="text-gray-900 font-semibold">{user?.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="p-3 bg-white rounded-xl text-pink-500 shadow-sm">
                      <UserIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Gender</p>
                      <p className="text-gray-900 font-semibold capitalize">{user?.gender}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <HeartIcon className="w-6 h-6 text-red-500" />
                  Activity
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50">
                    <p className="text-3xl font-bold text-blue-600">{cartItems.length}</p>
                    <p className="text-sm text-blue-800 font-medium whitespace-nowrap">Cart Items</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border border-pink-100/50">
                    <p className="text-3xl font-bold text-pink-600">0</p>
                    <p className="text-sm text-pink-800 font-medium">Wishlist</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100/50">
                    <p className="text-3xl font-bold text-amber-600">{(cartItems.length * 10) || 0}</p>
                    <p className="text-sm text-amber-800 font-medium">Points</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100/50">
                    <p className="text-3xl font-bold text-emerald-600">Active</p>
                    <p className="text-sm text-emerald-800 font-medium">Status</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div 
            onClick={() => router.push('/')}
            className="text-blue-500 hover:text-blue-600 font-medium transition-colors cursor-pointer inline-block"
          >
            ← Back to Shopping
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
