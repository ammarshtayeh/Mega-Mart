import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart, updateQuantity } from '../store/slices/cartSlice';
import { Product } from '../types';

interface UseProductDetailReturn {
  currentCount: number;
  price: number;
  discount: number;
  discounted: number;
  handleAddToCart: (quantity?: number) => void;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

const PLACEHOLDER_IMAGE = "https://placehold.co/600x600/f3f4f6/374151?text=No+Image";

export default function useProductDetail(product: Product | null): UseProductDetailReturn {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const productIdNum = product ? Number(product.id) : 0;
  const cartCounts = cartItems.reduce((acc, item) => {
    acc[Number(item.id)] = item.quantity;
    return acc;
  }, {} as Record<number, number>);

  const currentCount = cartCounts[productIdNum] || 0;

  const price = product?.price ?? 0;
  const discount = product?.discountPercentage ?? 0;
  const discounted = discount ? (price * (1 - discount / 100)) : price;

  const handleAddToCart = (quantity: number = 1) => {
    if (!product) return;
    
    if (currentCount + quantity > (product.stock || 0)) {
      console.warn("Cannot add more items than available in stock");
      return;
    }

    const priceNum = product.price || 0;
    const discountVal = product.discountPercentage || 0;
    const originalNum = discountVal ? (priceNum / (1 - discountVal / 100)) : priceNum;
    const saveNum = Math.max(0, originalNum - priceNum);

    dispatch(addToCart({
      id: product.id,
      name: product.title || product.name || '',
      imageSrc: product.thumbnail || (product.images && product.images[0]) || PLACEHOLDER_IMAGE,
      secondImage: product.secondImage || product.thumbnail || PLACEHOLDER_IMAGE,
      imageAlt: product.title || '',
      price: priceNum,
      originalPrice: originalNum || null,
      save: saveNum,
      discount: discountVal ? `${discountVal.toFixed(2)}% OFF` : '',
      quantity: quantity,
      stock: product.stock,
    }));
  };

  const handleIncrease = () => {
    if (!product) return;
    const nextCount = currentCount + 1;
    if (nextCount <= (product.stock || 0)) {
      dispatch(updateQuantity({ id: product.id, quantity: nextCount }));
    }
  };

  const handleDecrease = () => {
    if (product && currentCount > 0) {
      dispatch(updateQuantity({ id: product.id, quantity: currentCount - 1 }));
    }
  };

  return {
    currentCount,
    price: Number(price.toFixed(2)),
    discount,
    discounted: Number(discounted.toFixed(2)),
    handleAddToCart,
    handleIncrease,
    handleDecrease,
  };
}
