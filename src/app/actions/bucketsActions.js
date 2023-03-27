import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../services/axios";
export const getAllBuckets = createAsyncThunk(
  "buckets/getAllBuckets",
  async () => {
    try {
      const res = await client.get("buckets");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addBucket = createAsyncThunk(
  "buckets/addBucket",
  async (bucket) => {
    try {
      const res = await client.post("buckets", bucket);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
