import Image from "next/image";
import { ProductGalleryProps } from "../../types/product-detail";

export default function ProductGallery({ images, title, thumbnail }: ProductGalleryProps) {
  const mainImage = thumbnail || (images && images[0]) || "";
  const hasMultipleImages = Array.isArray(images) && images.length > 1;

  return (
    <div className="bg-gray-100 p-8 lg:p-12 flex flex-col items-center justify-center">
      <div className="relative w-full aspect-square max-w-md bg-white rounded-2xl shadow-sm p-6 mb-6">
        <Image
          src={mainImage}
          alt={title || "Product image"}
          fill
          className="object-contain hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      
      {hasMultipleImages && (
        <div className="flex gap-4 overflow-x-auto pb-4 w-full justify-center">
          {images.slice(0, 4).map((src: string, i: number) => (
            <div 
              key={i} 
              className="relative w-20 h-20 bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-blue-500 cursor-pointer overflow-hidden flex-shrink-0 transition-all"
            >
              <Image
                src={src}
                alt={`${title} - image ${i + 1}`}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
