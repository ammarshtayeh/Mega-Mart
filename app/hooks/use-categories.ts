"use client";

import { useState, useEffect } from "react";
import { fetchCategoryList } from "../apis/products-api";

export default function useCategories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      const data = await fetchCategoryList();
      setCategories(data);
      setLoading(false);
    }
    loadCategories();
  }, []);

  return { categories, loading };
}
