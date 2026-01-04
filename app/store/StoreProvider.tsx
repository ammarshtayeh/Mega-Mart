"use client";

import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { loadCartFromStorage } from './slices/cartSlice';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false);
  const saveTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!initialized.current) {
      
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          const cartItems = JSON.parse(savedCart);
          store.dispatch(loadCartFromStorage(cartItems));
        } catch (e) {
          console.error('Failed to load cart from localStorage', e);
        }
      }
      initialized.current = true;
    }

    
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      if (saveTimer.current) {
        window.clearTimeout(saveTimer.current);
      }
      saveTimer.current = window.setTimeout(() => {
        try {
          localStorage.setItem('cart', JSON.stringify(state.cart.items));
        } catch (e) {
          console.error('Failed to save cart to localStorage', e);
        }
        saveTimer.current = null;
      }, 500);
    });

    return () => {
      if (saveTimer.current) {
        window.clearTimeout(saveTimer.current);
      }
      unsubscribe();
    };
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
