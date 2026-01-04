"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import Header from "../Header";

export default function ProductDetailSkeleton() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-blue-50 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h1 className="mb-2">
              <Skeleton width={300} height={32} />
            </h1>
            <p className="mb-4">
              <Skeleton width={200} />
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="relative w-full h-64 flex items-center justify-center bg-gray-100 rounded">
                    <Skeleton height="100%" width="100%" />
                  </div>
                  <div className="mt-3 flex gap-2 overflow-x-auto">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Skeleton key={i} width={64} height={64} className="rounded" />
                    ))}
                  </div>
                </div>

                <div className="mt-4 bg-white p-4 rounded shadow">
                  <Skeleton width={100} height={32} />
                  <Skeleton width={60} height={20} className="mt-2" />
                  <Skeleton width={80} height={20} className="mt-2" />
                  <div className="mt-4">
                    <Skeleton height={42} borderRadius={8} />
                  </div>
                </div>
              </div>

              {}
              <div className="lg:col-span-2 space-y-4">
                <section className="bg-white p-4 rounded shadow">
                  <h2 className="font-semibold mb-2"><Skeleton width={100} /></h2>
                  <Skeleton count={3} />
                </section>

                <section className="bg-white p-4 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2"><Skeleton width={150} /></h3>
                    <ul className="space-y-1">
                      <li><Skeleton width={200} /></li>
                      <li><Skeleton width={180} /></li>
                      <li><Skeleton width={160} /></li>
                      <li><Skeleton width={190} /></li>
                      <li><Skeleton width={220} /></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2"><Skeleton width={150} /></h3>
                    <ul className="space-y-1">
                      <li><Skeleton width={180} /></li>
                      <li><Skeleton width={120} /></li>
                      <li><Skeleton width={140} /></li>
                      <li><Skeleton width={200} /></li>
                      <li><Skeleton width={160} /></li>
                    </ul>
                  </div>
                </section>

                <section className="bg-white p-4 rounded shadow">
                  <h3 className="font-medium mb-2"><Skeleton width={120} /></h3>
                  <div className="space-y-1">
                    <Skeleton width={160} />
                    <Skeleton width={160} />
                    <Skeleton width={160} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
