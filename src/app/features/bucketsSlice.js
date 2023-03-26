import { createSlice } from "@reduxjs/toolkit";
import { addBucket, getAllBuckets } from "../actions/bucketsActions";

const initialState = {
  loading: false,
  error: null,
  buckets: [],
};
const bucketsSlice = createSlice({
  name: "buckets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllBuckets.fulfilled, (state, action) => {
      // Add user to the state array
      state.buckets = [...action.payload];
    });
    builder.addCase(addBucket.fulfilled, (state, action) => {
      // Add user to the state array
      state.buckets = [action.payload, ...state.buckets];
    });
  },
});

export default bucketsSlice.reducer;
