"use client";
import React from "react";
import useProduct from "../hooks/useProduct";
import useProductDetail from "../hooks/useProductDetail";
import Header from "./Header";
import ProductDetailSkeleton from "./skeleton/ProductDetailSkeleton";
import ProductGallery from "./ProductDetail/ProductGallery";
import ProductInfo from "./ProductDetail/ProductInfo";
import ProductSpecs from "./ProductDetail/ProductSpecs";
import ProductReviews from "./ProductDetail/ProductReviews";
import { ProductDetailProps } from "../types/product-detail";

export default function ProductDetail({ id }: ProductDetailProps) {
  const { product, loading, error } = useProduct(id);
  const {
    currentCount,
    price,
    discount,
    discounted,
    handleAddToCart,
    handleIncrease,
    handleDecrease,
  } = useProductDetail(product);

  if (loading) return <ProductDetailSkeleton />;
  if (error || !product) {
    return <div className="p-8 text-center text-white">Product not found</div>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {}
              <ProductGallery
                images={product.images || []}
                title={product.title || ""}
                thumbnail={product.thumbnail || ""}
              />

              {}
              <div className="flex flex-col">
                <ProductInfo
                  category={product.category}
                  brand={product.brand}
                  title={product.title || product.name || ""}
                  rating={product.rating}
                  reviewsCount={product.reviews?.length || 0}
                  price={price}
                  discounted={discounted}
                  discount={discount}
                  description={product.description}
                  currentCount={currentCount}
                  onAddToCart={handleAddToCart}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                />

                {}
                <div className="px-8 lg:px-12">
                  <ProductSpecs
                    availabilityStatus={product.availabilityStatus}
                    stock={product.stock}
                    returnPolicy={product.returnPolicy}
                  />
                </div>
              </div>
            </div>

            {}
            <ProductReviews reviews={product.reviews} />
          </div>
        </div>
      </div>
    </>
  );
}