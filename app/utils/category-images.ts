export const CATEGORY_IMAGE_MAP: Record<string, string> = {
  "beauty": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
  "fragrances": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de%20Parchment/1.png",
  "furniture": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
  "groceries": "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
  "home-decoration": "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Wooden%20Star/1.png",
  "kitchen-accessories": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Utensil%20Holder/1.png",
  "laptops": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014-Inch%20Space%20Grey/1.png",
  "mens-shirts": "https://cdn.dummyjson.com/products/images/mens-shirts/Mens%20Casual%20Slim%20Fit/1.png",
  "mens-shoes": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Max%20270/1.png",
  "motorcycles": "https://cdn.dummyjson.com/products/images/motorcycles/Generic%20Motorcycle/1.png",
  "smartphones": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png",
  "sports-accessories": "https://cdn.dummyjson.com/products/images/sports-accessories/American%20Football%20Ball/1.png",
  "sunglasses": "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sunglasses/1.png",
  "tablets": "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202/1.png",
  "tops": "https://cdn.dummyjson.com/products/images/tops/Blue%20and%20White%20Check%20Shirt/1.png",
  "vehicle": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/1.png",
  "womens-bags": "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Womens%20Leather%20Bag/1.png",
  "womens-dresses": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Style%20Dress/1.png",
  "womens-jewellery": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earrings/1.png",
  "womens-shoes": "https://cdn.dummyjson.com/products/images/womens-shoes/Chunky%20High%20Heel/1.png",
};

export const getCategoryImage = (slug: string) => {
  return CATEGORY_IMAGE_MAP[slug] || `https://placehold.co/400x400/f3f4f6/3b82f6?text=${slug.replace(/-/g, '+')}`;
};
