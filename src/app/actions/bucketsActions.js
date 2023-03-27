import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../services/axios";
export const getAllBuckets = createAsyncThunk(
  "buckets/getAllBuckets",
  async () => {
    const res = await client.get("buckets");
    return res.data;
  }
);

export const addBucket = createAsyncThunk(
  "buckets/addBucket",
  async (bucket) => {
    const res = await client.post("buckets", bucket);
    console.log(res.data);
    return res.data;
  }
);
