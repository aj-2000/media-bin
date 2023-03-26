import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import bucketsReducer from "./features/bucketsSlice";
import cardsReducer from "./features/cardsSlice";
import histroyReducer from "./features/historySlice";

const rootReducer = combineReducers({
  buckets: bucketsReducer,
  cards: cardsReducer,
  history: histroyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = store;
