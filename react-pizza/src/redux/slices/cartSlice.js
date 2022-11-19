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
      state.selectedPizzas = state.selectedPizzas.filter((pizza) => {
        console.log(action.payload.id, action.payload.types, action.payload.sizes);
        if (
          pizza.id !== action.payload.id &&
          pizza.types !== action.payload.types &&
          pizza.sizes !== action.payload.sizes
        ) {
          return pizza;
        }
      });
    },
  },
});

export const { setSelectedPizzas, removeSelectedPizzas } = cartSlice.actions;

export default cartSlice.reducer;
