import { createSlice } from "@reduxjs/toolkit";

import {
  addCard,
  getAllCards,
  removeCard,
  updateCard,
} from "../actions/cardsActions";

const initialState = {
  loading: false,
  cards: [],
  iframeLink: null,
  editingCard: null,
};
export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setIframeLink: (state, value) => {
      state.iframeLink = value.payload;
    },
    setEditingCart: (state, value) => {
      state.editingCard = value.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCards.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllCards.fulfilled, (state, action) => {
      state.cards = [...action.payload];
      state.loading = false;
    });
    builder.addCase(getAllCards.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addCard.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addCard.fulfilled, (state, action) => {
      state.cards = [action.payload, ...state.cards];
      state.loading = false;
    });
    builder.addCase(addCard.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(removeCard.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(removeCard.fulfilled, (state, action) => {
      state.cards = [...state.cards.filter(({ id }) => id !== action.payload)];
      state.loading = false;
    });
    builder.addCase(removeCard.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(updateCard.fulfilled, (state, action) => {
      const cardToUpdate = state.cards.find(
        (card) => card.id === action.payload.id
      );
      cardToUpdate.name = action.payload.name;
      cardToUpdate.link = action.payload.link;
      cardToUpdate.linkType = action.payload.linkType;
      cardToUpdate.bucketName = action.payload.bucketName;
    });
  },
});

export const { setIframeLink, setEditingCart } = cardsSlice.actions;
export default cardsSlice.reducer;
