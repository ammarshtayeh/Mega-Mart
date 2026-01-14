"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation";

export default function useHeader() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showCategories, setShowCategories] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");

  useEffect(() => {
    if (params?.slug) {
      setActiveCategory(params.slug as string);
    } else {
      setActiveCategory(null);
    }
  }, [params?.slug]);

  useEffect(() => {
    const currentSearch = searchParams.get("search") || "";
    if (currentSearch !== searchQuery) {
      setSearchQuery(currentSearch);
    }
  }, [searchParams]);

	function toggleMenu() {
		setIsMenuOpen((closed) => !closed);
	}

  function toggleCategories() {
    setShowCategories((prev) => !prev);
  }

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug);
    setShowCategories(false);
    setIsMenuOpen(false);
    router.push(`/category/${slug}`);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    
    
    
    if (value.length >= 2) {
       router.push(`/products?search=${encodeURIComponent(value)}`);
    } else if (value.length === 0 && pathname === '/products') {
       router.push('/products');
    }
    
    
    if (pathname === '/products') {
        if (value) {
            router.replace(`/products?search=${encodeURIComponent(value)}`);
        } else {
            router.replace('/products');
        }
    } else {
        if (value.length >= 2) {
            router.push(`/products?search=${encodeURIComponent(value)}`);
        }
    }
  };

	return {
		isMenuOpen,
		setIsMenuOpen,
		toggleMenu,
		activeCategory,
		setActiveCategory,
    showCategories,
    setShowCategories,
    toggleCategories,
    handleCategoryClick,
    router,
    searchQuery,
    setSearchQuery,
    handleSearchChange
	} as const;
}
