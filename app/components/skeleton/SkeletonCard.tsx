"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default function SkeletonCard() {
  return (
    <div className="relative w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
      <div className="absolute top-3 right-3">
        <Skeleton width={60} height={20} borderRadius={999} />
      </div>

      <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3 h-36 md:h-44 lg:h-48">
        <Skeleton height="100%" width="100%" />
      </div>

      <div className="mt-4">
        <Skeleton width="80%" />
      </div>

      <div className="mt-2 space-y-2">
        <Skeleton width="45%" height={24} />
        <Skeleton width="30%" />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <Skeleton width={90} />
        <Skeleton width={90} height={32} />
      </div>
    </div>
  );
}
