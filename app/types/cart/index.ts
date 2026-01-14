import { ProductCard } from "../card";

export interface CartItem extends ProductCard {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
