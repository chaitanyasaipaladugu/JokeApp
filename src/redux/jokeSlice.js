import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1️⃣ Async thunk to fetch random joke
export const fetchJoke = createAsyncThunk("jokes/fetchJoke", async () => {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  if (!res.ok) throw new Error("Failed to fetch joke");
  const data = await res.json();
  return `${data.setup} — ${data.punchline}`;
});

// 2️⃣ Slice definition
const jokeSlice = createSlice({
  name: "jokes",
  initialState: {
    currentJoke: null,
    loading: false,
    error: null,
    lastJoke: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.loading = false;
        state.currentJoke = action.payload;
        state.lastJoke = action.payload; // save last fetched joke
      })
      .addCase(fetchJoke.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearError } = jokeSlice.actions;
export default jokeSlice.reducer;
