"use client";
import React from 'react';
import Image from 'next/image';
import useDailyEssentials from '../hooks/useDailyEssentials';
import { DailyEssentialProduct } from '../types';
import DailyEssentialsSkeleton from './skeleton/DailyEssentialsSkeleton';

interface DailyEssentialsProps {
  loading?: boolean;
}

export default function DailyEssentials({ loading: externalLoading }: DailyEssentialsProps) {
  const { products, loading: hookLoading } = useDailyEssentials();
  const isLoading = externalLoading !== undefined ? externalLoading : hookLoading;

  if (isLoading) {
    return <DailyEssentialsSkeleton />;
  }

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-2 relative">
          <div className="relative">
            <h2 className="text-2xl font-bold text-gray-500">
              Daily <span className="text-[#2B9BCF]">Essentials</span>
            </h2>
            <div className="absolute -bottom-[9px] left-0 h-[3px] w-24 bg-[#2B9BCF]" />
          </div>
          <a 
            href="#" 
            className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-[#2B9BCF] transition-colors"
          >
            View All 
            <span className="text-lg">›</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <div key={product.id} className="group cursor-pointer">
              <div className={`relative aspect-square rounded-2xl bg-[#F5F5F5] flex items-center justify-center p-4 transition-all duration-300 ${index === 0 ? 'ring-2 ring-[#2B9BCF]' : 'hover:shadow-md'}`}>
                <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-medium text-gray-600 truncate px-2">
                  {product.title}
                </p>
                <p className="text-base font-extrabold text-gray-900 mt-1">
                  {product.discountText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
