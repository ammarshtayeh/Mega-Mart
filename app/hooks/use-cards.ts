import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProductsAsync } from '../store/slices/productsSlice';
import { addToCart as addToCartAction, updateQuantity as updateQuantityAction } from '../store/slices/cartSlice';
import { ProductCard } from '../types';

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

  const PLACEHOLDER_IMAGE = "https://placehold.co/600x600/f3f4f6/374151?text=No+Image";

  function addToCart(product: ProductCard, quantity: number = 1) {
    const currentQuantity = cartCounts[Number(product.id)] || 0;
    if (currentQuantity + quantity > product.stock) {
      console.warn("Cannot add more items than available in stock");
      return;
    }
    dispatch(addToCartAction({ 
      ...product, 
      quantity,
      imageSrc: product.imageSrc || PLACEHOLDER_IMAGE,
      name: product.name || ''
    }));
  }

  function updateQuantity(id: number | string, quantity: number, stockLimit?: number) {
    if (stockLimit !== undefined && quantity > stockLimit) {
      console.warn("Cannot exceed stock limit");
      return;
    }
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
