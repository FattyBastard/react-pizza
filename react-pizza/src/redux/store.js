import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';

import filter from './slices/sortSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
  devToolsEnhancer() {},
});
