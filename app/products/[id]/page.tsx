"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import ProductDetail from '../../components/ProductDetail';

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string | undefined;

  if (!id) {
    return (
      <div className="p-8">
        <h2 className="text-lg font-semibold">Product id missing</h2>
      </div>
    );
  }

  return <ProductDetail id={id} />;
}
