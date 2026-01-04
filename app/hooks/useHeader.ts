"use client";

import { useState } from "react";

export default function useHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [isCartOpen, setIsCartOpen] = useState(false);

	function toggleMenu() {
		setIsMenuOpen((closed) => !closed);
	}

	function toggleCart() {
		setIsCartOpen((closed) => !closed);
	}

	return {
		isMenuOpen,
		setIsMenuOpen,
		toggleMenu,
		activeCategory,
		setActiveCategory,
		isCartOpen,
		setIsCartOpen,
		toggleCart,
	} as const;
}
