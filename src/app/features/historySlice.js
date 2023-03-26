import { createSlice } from "@reduxjs/toolkit";
import { addHistory, getAllHistory } from "../actions/historyActions";

const initialState = {
  loading: false,
  error: null,
  history: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllHistory.fulfilled, (state, action) => {
      // Add user to the state array
      state.history = [...action.payload];
    });
    builder.addCase(addHistory.fulfilled, (state, action) => {
      // Add user to the state array
      state.history = [action.payload, ...state.history];
    });
  },
});

export default historySlice.reducer;
