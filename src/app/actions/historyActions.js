import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../services/axios";
export const getAllHistory = createAsyncThunk(
  "history/getAllHistory",
  async () => {
    try {
      const res = await client.get("history?_sort=id&_order=desc");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addHistory = createAsyncThunk(
  "history/addHistory",
  async (history) => {
    try {
      const res = await client.post("history", history);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
