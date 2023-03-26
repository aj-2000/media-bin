import { createSlice } from "@reduxjs/toolkit";

import {
  addCard,
  getAllCards,
  removeCard,
  updateCard,
} from "../actions/cardsActions";

const initialState = {
  loading: false,
  error: null,
  cards: [],
};
export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllCards.fulfilled, (state, action) => {
      // Add user to the state array
      state.cards = [...action.payload];
    });
    builder.addCase(addCard.fulfilled, (state, action) => {
      // Add user to the state array
      state.cards = [action.payload, ...state.cards];
    });
    builder.addCase(removeCard.fulfilled, (state, action) => {
      // Add user to the state array
      state.cards = [...state.cards.filter(({ id }) => id !== action.payload)];
    });
    builder.addCase(updateCard.fulfilled, (state, action) => {
      state.cards = [
        ...state.cards.map((obj) => {
          if (obj.id === action.payload.id) {
            return {
              name: action.payload.data.name,
              link: action.payload.data.link,
              bucketId: action.payload.data.bucketId,
              bucketName: action.payload.data.bucketName,
            };
          }
          return obj;
        }),
      ];
    });
  },
});

export default cardsSlice.reducer;
