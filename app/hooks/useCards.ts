import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProductsAsync } from '../store/slices/productsSlice';
import { addToCart as addToCartAction, updateQuantity as updateQuantityAction } from '../store/slices/cartSlice';

export default function useCards() {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  
  const [hoveredId, setHoveredId] = useState<number | string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const cartCounts = cartItems.reduce((acc, item) => {
    acc[Number(item.id)] = item.quantity;
    return acc;
  }, {} as Record<number, number>);

  useEffect(() => {
    if (items.length === 0 && !loading) {
      dispatch(fetchProductsAsync());
    }
  }, [dispatch, items.length, loading]);

  function addToCart(id: number | string, quantity: number = 1) {
    const product = items.find(item => item.id === id);
    if (product) {
      dispatch(addToCartAction({ ...product, quantity }));
    }
  }

  function updateQuantity(id: number | string, quantity: number) {
    dispatch(updateQuantityAction({ id, quantity }));
  }

  function toggleShowAll() {
    setShowAll((s) => !s);
  }

  return {
    items,
    loading,
    hoveredId,
    setHoveredId,
    showAll,
    toggleShowAll,
    cartCounts,
    addToCart,
    updateQuantity,
  } as const;
}
