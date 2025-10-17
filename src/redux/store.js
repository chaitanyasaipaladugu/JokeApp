import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "./jokeSlice";

export const store = configureStore({
  reducer: {
    jokes: jokeReducer,
  },
});
