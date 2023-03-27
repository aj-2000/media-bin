import { createSlice } from "@reduxjs/toolkit";
import { addHistory, getAllHistory } from "../actions/historyActions";

const initialState = {
  loading: false,
  history: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllHistory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllHistory.fulfilled, (state, action) => {
      state.history = [...action.payload];
      state.loading = false;
    });
    builder.addCase(getAllHistory.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addHistory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addHistory.fulfilled, (state, action) => {
      state.history = [action.payload, ...state.history];
      state.loading = false;
    });
    builder.addCase(addHistory.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default historySlice.reducer;
