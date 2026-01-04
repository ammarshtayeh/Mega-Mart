import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function DailyEssentialsSkeleton() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-2 relative">
          <div className="relative">
            <Skeleton width={200} height={32} />
            <div className="absolute -bottom-[9px] left-0 h-[3px] w-24 bg-gray-100" />
          </div>
          <Skeleton width={80} height={20} />
        </div>

        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full aspect-square bg-[#F5F5F5] rounded-2xl p-4 overflow-hidden">
                <Skeleton height="100%" containerClassName="flex-1 h-full w-full" />
              </div>
              <div className="mt-4 w-3/4 text-center">
                <Skeleton height={14} />
              </div>
              <div className="mt-2 w-1/2 text-center">
                <Skeleton height={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
