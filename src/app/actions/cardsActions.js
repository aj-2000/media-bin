import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../services/axios";

export const getAllCards = createAsyncThunk("cards/getAllCards", async () => {
  const res = await client.get("cards?_sort=id&_order=desc");
  return res.data;
});

export const addCard = createAsyncThunk("cards/addCard", async (card) => {
  const res = await client.post("cards", card);
  return res.data;
});

export const removeCard = createAsyncThunk("cards/removeCard", async (id) => {
  await client.delete(`cards/${id}`);
  return id;
});

export const updateCard = createAsyncThunk("cards/updateCard", async (card) => {
  const res = await client.put(`cards/${card.id}`, card.data);

  return res.data;
});
