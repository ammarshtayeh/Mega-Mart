"use client";
import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function TopElectronicsBrandsSkeleton() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <Skeleton width={300} height={36} />
            <div className="mt-2 h-1.5 w-24 bg-gray-200 rounded-full" />
          </div>
          <Skeleton width={80} height={20} />
        </div>

        {}
        <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="relative min-w-[280px] sm:min-w-[320px] rounded-3xl p-8 flex flex-col justify-between bg-white overflow-hidden shadow-sm animate-pulse"
            >
              <div className="flex items-center gap-3 relative z-10">
                <Skeleton circle width={40} height={40} />
                <Skeleton width={100} height={24} />
              </div>

              <div className="my-10 flex-1 flex items-center justify-center relative z-10">
                <Skeleton width={180} height={180} />
              </div>

              <div className="relative z-10">
                <Skeleton width={120} height={32} borderRadius={999} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
