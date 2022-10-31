import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    fetchData: (state) => {
      fetch(
        `https://635bc6d8aa7c3f113dc5eb70.mockapi.io/pizza?${
          state.activeCategory > 0 ? `category=${state.activeCategory}` : ``
        }&sortBy=${state.sortType[state.sortCategory].sortProperty.replace('-', '')}&order=${
          state.sortType[state.sortCategory].sortProperty.includes('-') ? `desc` : `asc`
        }`,
      )
        .then((res) => res.json())
        .then((arr) => {
          state.cards = arr;
        });
    },
  },
  //   increment: (state) => {
  //     state.value += 1;
  //   },
  //   decrement: (state) => {
  //     state.value -= 1;
  //   },
  //   incrementByAmount: (state, action) => {
  //     state.value += action.payload;
  //   },
  // },
});

export const { fetchData } = sortSlice.actions;

export default sortSlice.reducer;
