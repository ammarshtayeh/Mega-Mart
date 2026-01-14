import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchProducts from '../../apis/products-api';
import { Product, ProductCard } from '../../types';

interface ProductsState {
  items: ProductCard[];
  loading: boolean;
  error: string | null;
  hasFetched: boolean;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  hasFetched: false,
};

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async (_, { getState }) => {
    const state = getState() as { products: ProductsState };
    
    
    if (state.products.hasFetched) {
      return state.products.items;
    }

    const prods = await fetchProducts();
    const mapped = prods.map((p: Product) => {
      const priceNum = p.price || 0;
      const discount = p.discountPercentage || 0;
      
      
      if (discount > 0) {
        const originalNum = priceNum / (1 - discount / 100);
        const saveNum = Math.max(0, originalNum - priceNum);
        return {
          id: p.id,
          name: p.title || '',
          imageSrc: p.thumbnail || '',
          secondImage: p.secondImage || p.thumbnail || '',
          imageAlt: p.title || '',
          price: priceNum,
          originalPrice: originalNum,
          save: saveNum,
          discount: `${discount.toFixed(2)}% OFF`,
          stock: p.stock || 0,
          description: p.description || '',
          category: p.category || '',
        };
      } else {
        
        return {
          id: p.id,
          name: p.title || '',
          imageSrc: p.thumbnail || '',
          secondImage: p.secondImage || p.thumbnail || '',
          imageAlt: p.title || '',
          price: priceNum,
          originalPrice: null,
          save: 0,
          discount: '',
          stock: p.stock || 0,
          description: p.description || '',
          category: p.category || '',
        };
      }
    });
    return mapped;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearCache: (state) => {
      state.hasFetched = false;
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.hasFetched = true;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const { clearCache } = productsSlice.actions;
export default productsSlice.reducer;
