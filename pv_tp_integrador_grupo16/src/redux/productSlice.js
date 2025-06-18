import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    favorites: [],
  },
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      const fav = state.favorites.includes(id);
      if (fav) {
        state.favorites = state.favorites.filter(favId => favId !== id);
      } else {
        state.favorites.push(id);
      }
    },
    addProduct(state, action) {
      const newProduct = { ...action.payload, id: Date.now() };
      state.list.push(newProduct);
    },
    editProduct(state, action) {
      const updated = action.payload;
      const index = state.list.findIndex(p => p.id === updated.id);
      if (index !== -1) {
        state.list[index] = updated;
      }
    },
    deleteProduct(state, action) {
      state.list = state.list.filter(p => p.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { toggleFavorite, addProduct, editProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
