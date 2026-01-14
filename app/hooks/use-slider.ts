import { useEffect, useState } from 'react';
import { slides } from '@/app/utils/mock-slides';

const DEFAULT_INTERVAL = 5000;

export default function useSlider(autoMs = DEFAULT_INTERVAL) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, autoMs);
    return () => clearInterval(timer);
  }, [currentSlide, autoMs]);

  return { currentSlide, nextSlide, prevSlide } as const;
}
