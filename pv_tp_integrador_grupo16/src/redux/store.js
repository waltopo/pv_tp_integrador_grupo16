import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice.js';
import authReducer from './authSlice.js';
export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth:authReducer,
  },
});
