"use client";
import { useEffect, useState } from "react";
import { Product, ProductCard } from "../types";
import { fetchProductsByCategory } from "../apis/products-api";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x600/f3f4f6/374151?text=No+Image";

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
            imageSrc: p.thumbnail || PLACEHOLDER_IMAGE,
            secondImage: p.secondImage || p.thumbnail || PLACEHOLDER_IMAGE,
            imageAlt: p.title || "",
            price: priceNum,
            originalPrice: discount > 0 ? originalNum : null,
            save: discount > 0 ? saveNum : 0,
            discount: discount > 0 ? `${discount.toFixed(2)}% OFF` : "",
            stock: p.stock || 0,
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
