"use client";
import { useEffect, useState } from "react";
import { Product, DailyEssentialProduct } from "../types";
import { fetchProductsByCategory } from "../apis/api";

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
          title: p.title || "",
          image: p.thumbnail || "",
          discountText: p.discountPercentage ? `${p.discountPercentage}% OFF` : "UP to 50% OFF", // As per design requirement
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
