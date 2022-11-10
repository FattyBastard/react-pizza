import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPizzas: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setSelectedPizzas(state, action) {
      state.selectedPizzas.push(action.payload);
    },
    removeSelectedPizzas(state, action) {
      state.selectedPizzas = state.selectedPizzas.filter((pizza) => pizza.id != action.payload);
    },
  },
});

export const { setSelectedPizzas, removeSelectedPizzas } = cartSlice.actions;

export default cartSlice.reducer;
