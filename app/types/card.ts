
export interface CardProps {
  product: ProductCard;
  hoveredId: number | string | null;
  setHoveredId: (id: number | string | null) => void;
  addToCart: (product: ProductCard, quantity?: number) => void;
  updateQuantity: (id: number | string, quantity: number, stockLimit?: number) => void;
  cartCounts: Record<string | number, number>;
  isLoading?: boolean;
}
export interface ProductCard {
  id: number | string;
  name: string;
  imageSrc: string;
  secondImage: string;
  imageAlt: string;
  price: number;
  originalPrice?: number | null;
  save: number;
  discount: string;
  stock: number;
  description?: string;
  category?: string;
}

