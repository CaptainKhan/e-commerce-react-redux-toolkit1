import { configureStore } from '@reduxjs/toolkit';
import slideReducer from '../../src/features/slices/sliderSlice';

export const store = configureStore({
  reducer: {
      slider: slideReducer,
  },
});
