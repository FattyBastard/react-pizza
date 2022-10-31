import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/sortSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
