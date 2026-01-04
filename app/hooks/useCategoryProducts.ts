"use client";
import { useEffect, useState } from "react";
import { Product, ProductCard } from "../types";
import { fetchProductsByCategory } from "../apis/api";

export default function useCategoryProducts(category: string) {
  const [products, setProducts] = useState<ProductCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const rawProducts = await fetchProductsByCategory(category);
        const mapped = rawProducts.map((p: Product) => {
          const priceNum = p.price || 0;
          const discount = p.discountPercentage || 0;
          const originalNum = priceNum / (1 - discount / 100);
          const saveNum = Math.max(0, originalNum - priceNum);

          return {
            id: p.id,
            name: p.title || "",
            imageSrc: p.thumbnail || "",
            secondImage: p.secondImage || p.thumbnail || "",
            imageAlt: p.title || "",
            price: `$${priceNum.toFixed(2)}`,
            originalPrice: discount > 0 ? `$${originalNum.toFixed(2)}` : null,
            save: discount > 0 ? `$${saveNum.toFixed(2)}` : "",
            discount: discount > 0 ? `${discount.toFixed(2)}% OFF` : "",
          };
        });
        setProducts(mapped);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, [category]);

  return { products, loading };
}
