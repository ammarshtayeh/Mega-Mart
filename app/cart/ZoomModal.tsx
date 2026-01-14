import React from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ZoomModalProps } from "../types/cart/props";
export default function ZoomModal({ imageSrc, onClose }: ZoomModalProps) {
  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        onClick={onClose}
      >
        <XMarkIcon className="w-8 h-8" />
      </button>
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl scale-in-center">
        <Image
          src={imageSrc}
          alt="Zoomed product"
          fill
          className="object-contain p-8"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <style jsx global>{`
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .scale-in-center {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
