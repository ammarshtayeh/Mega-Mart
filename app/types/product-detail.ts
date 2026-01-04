import { Review } from "./index";

export interface ProductDetailProps {
  id: string;
}

export interface ProductGalleryProps {
  images: string[];
  title: string;
  thumbnail: string;
}

export interface ProductInfoProps {
  category?: string;
  brand?: string;
  title: string;
  rating?: number;
  reviewsCount: number;
  price: number;
  discounted: number;
  discount: number;
  description?: string;
  currentCount: number;
  onAddToCart: (quantity: number) => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

export interface ProductReviewsProps {
  reviews?: Review[];
}

export interface ProductSpecsProps {
  availabilityStatus?: string;
  stock?: number;
  returnPolicy?: string;
}
