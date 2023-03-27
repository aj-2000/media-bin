import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../services/axios";

export const getAllCards = createAsyncThunk("cards/getAllCards", async () => {
  try {
    const res = await client.get("cards?_sort=id&_order=desc");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const addCard = createAsyncThunk("cards/addCard", async (card) => {
  try {
    const res = await client.post("cards", card);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const removeCard = createAsyncThunk("cards/removeCard", async (id) => {
  try {
    await client.delete(`cards/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
});

export const updateCard = createAsyncThunk("cards/updateCard", async (card) => {
  try {
    const res = await client.put(`cards/${card.id}`, card.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
