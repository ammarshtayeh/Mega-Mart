import React, { useState } from "react";
import Image from "next/image";
import { ProductGalleryProps } from "../../types/product-detail";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x600/f3f4f6/374151?text=No+Image";

export default function ProductGallery({ images = [], title = "Product", thumbnail = "" }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const displayImages = images.length > 0 ? images : (thumbnail ? [thumbnail] : [PLACEHOLDER_IMAGE]);
  const mainImage = selectedImage || displayImages[0];
  const hasMultipleImages = displayImages.length > 1;

  return (
    <div className="bg-gray-100 p-8 lg:p-12 flex flex-col items-center justify-center">
      <div className="relative w-full aspect-square max-w-md bg-white rounded-2xl shadow-sm p-6 mb-6">
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-contain hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      
      {hasMultipleImages ? (
        <div className="flex gap-4 overflow-x-auto pb-4 w-full justify-center scrollbar-hide">
          {displayImages.slice(0, 5).map((src: string, i: number) => (
            <button 
              key={i} 
              onClick={() => setSelectedImage(src)}
              className={`relative w-20 h-20 bg-white rounded-xl shadow-sm border-2 overflow-hidden flex-shrink-0 transition-all ${
                mainImage === src ? "border-blue-500 scale-105 shadow-md" : "border-transparent hover:border-gray-300"
              }`}
            >
              <Image
                src={src}
                alt={`${title} - image ${i + 1}`}
                fill
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
