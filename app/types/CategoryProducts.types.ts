export interface CategoryProductsProps {
  category: string;
}

export interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}