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
    builder.addCase(getAllBuckets.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllBuckets.fulfilled, (state, action) => {
      state.buckets = [...action.payload];
      state.loading = false;
    });
    builder.addCase(getAllBuckets.rejected, (state, action) => {
      state.buckets = [...action.payload];
      state.loading = false;
    });
    builder.addCase(addBucket.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addBucket.fulfilled, (state, action) => {
      state.buckets = [action.payload, ...state.buckets];
      state.loading = false;
    });
    builder.addCase(addBucket.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default bucketsSlice.reducer;
