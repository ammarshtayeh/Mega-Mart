import { useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";

export default function useCart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const totalPrice = useMemo(() => 
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
  [cartItems]);

  const totalItems = useMemo(() => 
    cartItems.reduce((sum, item) => sum + item.quantity, 0),
  [cartItems]);

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
