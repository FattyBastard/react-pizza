import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/sortSlice';

export const store = configureStore({
  reducer: {
    filter,
  },
});
