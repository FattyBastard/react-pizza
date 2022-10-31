import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  sort: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setSortCategory(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setActiveCategory, setSortCategory } = filterSlice.actions;

export default filterSlice.reducer;
