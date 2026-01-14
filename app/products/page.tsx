"use client";
import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/UI/Breadcrumb";
import ProductGrid from "../components/ProductGrid";
import useCards from "../hooks/use-cards";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const { items: allProducts, loading: productsLoading } = useCards();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  let filteredProducts = [...allProducts];

  if (searchQuery.length >= 2) {
    const lowerQuery = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter((product) => 
      (product.name || "").toLowerCase().includes(lowerQuery)
    );
  }
  
  filteredProducts.sort((a, b) => Number(b.id) - Number(a.id));

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 pt-24 gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Products</h1>
        </div>

        <Breadcrumb items={[{ name: "Products" }]} />

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
           <ProductGrid products={filteredProducts} loading={productsLoading} />
        </section>
      </div>
    </main>
  );
}
