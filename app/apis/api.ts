import { Product } from "../types";

export async function fetchProducts(
  url = "https://dummyjson.com/products"
): Promise<Product[]> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed : ${res.status} ${res.statusText}`);

    const data = await res.json();
  const products: Product[] = data?.products || [];

  const product: Product[] = products?.map((p: Product) => {
    const price = typeof p.price === "number" ? p.price : Number(p.price) || 0;
    const discount = p.discountPercentage || 0;
    const discountedTotal = discount ? price * (1 - discount / 100) : price;
    const thumbnail = p.thumbnail || (p.images && p.images[0]) || undefined;
const RATING = p.rating || 0;
const stock = p.stock || 0;
    let secondImage =
      (p.images && p.images[1]) ||
      p.thumbnail ||
      (p.images && p.images[0]) ||
      undefined;

    return {
      id: p.id,
      title: p.title || "Untitled",
      description: p.description || "",
      category: p.category || "General",
      brand: p.brand || "Generic",
      sku: p.sku || "",
      tags: p.tags || [],
      weight: typeof p.weight === 'number' ? p.weight : 0,
      dimensions: p.dimensions || {},
      warrantyInformation: p.warrantyInformation || "",
      shippingInformation: p.shippingInformation || "",
      availabilityStatus: p.availabilityStatus || "In Stock",
      reviews: p.reviews || [],
      returnPolicy: p.returnPolicy || "30 days return policy",
      minimumOrderQuantity: p.minimumOrderQuantity || 1,
      meta: p.meta || {},
      
      price,
      images: p.images || [],
      thumbnail: thumbnail || "",
      secondImage,
      quantity: 1,
      total: price,
      discountPercentage: discount,
      discountedTotal,
      rating: RATING,
      stock,
    };
  });

    return product;
  } catch (err) {
    console.error('fetchProducts error:', err);
    throw err instanceof Error ? err : new Error(String(err));
  }
}


export async function fetchProduct(id: number | string) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    return res.json();
  } catch (err) {
    console.error(`fetchProduct(${id}) error:`, err);
    throw err instanceof Error ? err : new Error(String(err));
  }
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  return fetchProducts(`https://dummyjson.com/products/category/${category}`);
}

export default fetchProducts;
