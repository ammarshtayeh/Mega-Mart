import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";

export default function useCart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleRemove = (id: string | number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: string | number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleZoom = (imageSrc: string) => {
    setZoomedImage(imageSrc);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  return {
    cartItems,
    totalPrice,
    totalItems,
    zoomedImage,
    handleRemove,
    handleUpdateQuantity,
    handleZoom,
    closeZoom,
  };
}
