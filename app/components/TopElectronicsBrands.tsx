import React from 'react';
import Image from 'next/image';
import { BRANDS } from '../utils/mock-brands';
import TopElectronicsBrandsSkeleton from './skeleton/TopElectronicsBrandsSkeleton';

interface TopElectronicsBrandsProps {
  loading?: boolean;
}

export default function TopElectronicsBrands({ loading }: TopElectronicsBrandsProps) {
  if (loading) {
    return <TopElectronicsBrandsSkeleton />;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Top <span className="text-blue-600">Electronics Brands</span>
            </h2>
            <div className="mt-2 h-1.5 w-24 bg-blue-500 rounded-full" />
          </div>
          <a 
            href="#" 
            className="group flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All 
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className={`group relative min-w-[280px] sm:min-w-[320px] rounded-3xl p-8 flex flex-col justify-between ${brand.bg} ${brand.text} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all" />

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
                  <Image 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    width={24} 
                    height={24} 
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl tracking-wide">{brand.name}</span>
              </div>

              <div className="my-10 flex-1 flex items-center justify-center relative z-10">
                <div className="relative transform transition-transform duration-700 group-hover:scale-110">
                  <Image 
                    src={brand.image} 
                    alt={brand.name} 
                    width={180} 
                    height={180} 
                    className="object-contain drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-black/5 blur-2xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-bold shadow-sm">
                  {brand.discount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


