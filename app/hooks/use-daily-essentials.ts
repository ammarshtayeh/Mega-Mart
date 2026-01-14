"use client";
import { useEffect, useState } from "react";
import { Product, DailyEssentialProduct } from "../types";
import { fetchProductsByCategory } from "../apis/products-api";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x600/f3f4f6/374151?text=No+Image";

export default function useDailyEssentials() {
  const [products, setProducts] = useState<DailyEssentialProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const rawProducts = await fetchProductsByCategory("groceries");
        const mapped: DailyEssentialProduct[] = rawProducts.slice(0, 6).map((p: Product) => ({
          id: p.id,
          title: p.title || "Essentials Item",
          image: p.thumbnail || p.images?.[0] || PLACEHOLDER_IMAGE,
          discountText: p.discountPercentage ? `${p.discountPercentage}% OFF` : "Great Deals", 
        }));
        setProducts(mapped);
      } catch (err) {
        console.error("Failed to fetch daily essentials:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return { products, loading };
}
