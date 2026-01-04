
export interface CardProps {
  product: ProductCard;
  hoveredId: number | string | null;
  setHoveredId: (id: number | string | null) => void;
  addToCart: (id: number | string, quantity?: number) => void;
  updateQuantity: (id: number | string, quantity: number) => void;
  cartCounts: Record<string | number, number>;
  isLoading?: boolean;
}
export interface ProductCard {
  id: number | string;
  name: string;
  imageSrc: string;
  secondImage: string;
  imageAlt: string;
  price: string;
  originalPrice?: string | null;
  save: string;
  discount: string;
}


export interface CartItem extends ProductCard {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
