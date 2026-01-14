import { CartItem } from "./index";

export interface CartItemProps {
  item: CartItem;
  onRemove: (id: string | number) => void;
  onUpdateQuantity: (id: string | number, quantity: number) => void;
  onZoom: (imageSrc: string) => void;
}

export interface OrderSummaryProps {
  totalItems: number;
  totalPrice: number;
}

export interface ZoomModalProps {
  imageSrc: string;
  onClose: () => void;
}
