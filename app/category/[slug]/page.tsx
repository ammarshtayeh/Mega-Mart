  import React from "react";
import Header from "../../components/Header";
import CategoryProducts from "../../components/CategoryProducts";
import Breadcrumb from "../../components/UI/Breadcrumb";
import { CategoryPageProps } from "../../types/CategoryProducts.types";
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const displayName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12">
          <Breadcrumb items={[{ name: displayName }]} />
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 border-b border-gray-200 pb-6">
            Category: <span className="text-blue-600">{displayName}</span>
          </h1>
        </div>

        <CategoryProducts category={slug} />
      </div>
    </main>
  );
}
