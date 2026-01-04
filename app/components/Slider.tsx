"use client";

import useSlider from "../hooks/useSlider";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { slides } from "@/app/utils/mock-slides";
import Image from "next/image";

export default function Slider() {
  const { currentSlide, nextSlide, prevSlide } = useSlider(5000);

  return (
    <div className="relative w-full bg-gray-50 py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
          <div className="relative h-64 sm:h-80 md:h-96">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className={`${slide.bgColor} h-full w-full relative`}>
                  <div className="hidden md:block absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                  <div className="relative h-full grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="px-4 sm:px-8 md:px-12 lg:px-20 z-10">
                      <div className="max-w-xl lg:max-w-2xl">
                        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-1 md:mb-2">
                          {slide.title}
                        </p>
                        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4">
                          {slide.subtitle}
                        </h2>
                        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                          {slide.discount}
                        </p>
                      </div>
                    </div>

                    <div className="relative flex justify-center rounded-full md:justify-end pr-0 md:pr-16 lg:pr-32">
                      <div
                        className="
      w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden relative
   "
                      >
                        <Image
                          src={slide.image}
                          alt={slide.subtitle}
                          fill
                          className="object-cover drop-shadow-2xl"
                          priority={index === 0}
                          sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 256px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-4 h-4 sm:w-5  sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
