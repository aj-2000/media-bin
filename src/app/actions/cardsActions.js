import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../services/axios";

export const getAllCards = createAsyncThunk("cards/getAllCards", async () => {
  const res = await client.get("cards");
  console.log(res.data);
  return res.data;
});

export const addCard = createAsyncThunk("cards/addCard", async (card) => {
  const res = await client.post("cards", card);
  console.log(res.data);
  return card;
});

export const removeCard = createAsyncThunk("cards/removeCard", async (id) => {
  const res = await client.delete(`cards/${id}`);
  console.log(res.data);
  return res.data;
});

export const updateCard = createAsyncThunk("cards/updateCard", async (card) => {
  const res = await client.put(`cards/${card.id}`, card.data);
  console.log(res.data);
  return res.data;
});
