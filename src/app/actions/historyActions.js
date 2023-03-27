import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../services/axios";
export const getAllHistory = createAsyncThunk(
  "history/getAllHistory",
  async () => {
    const res = await client.get("history?_sort=id&_order=desc");
    return res.data;
  }
);

export const addHistory = createAsyncThunk(
  "history/addHistory",
  async (history) => {
    const res = await client.post("history", history);
    return res.data;
  }
);
