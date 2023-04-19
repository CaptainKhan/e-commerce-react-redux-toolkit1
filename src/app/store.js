import { configureStore } from '@reduxjs/toolkit';
import slideReducer from '../../src/features/slices/sliderSlice';
import productsReducer from '../../src/features/slices/productsSlice';
import cartReducer from '../../src/features/slices/cartSlice';


export const store = configureStore({
  reducer: {
      slider: slideReducer,
      products: productsReducer,
      cart: cartReducer,
  },
});