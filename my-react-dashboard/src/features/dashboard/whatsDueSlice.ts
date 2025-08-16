import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Quiz {
  _id: string;
  type: string;
  title: string;
  course: string;
  topic: string;
  date: string;
}

interface WhatsDueState {
  items: Quiz[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: WhatsDueState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchQuizzes = createAsyncThunk('whatsDue/fetchQuizzes', async () => {
  const response = await fetch('http://localhost:5000/quizzes');
  const data = await response.json();
  return data;
});

const whatsDueSlice = createSlice({
  name: 'whatsDue',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default whatsDueSlice.reducer;