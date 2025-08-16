import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Announcement {
  avatarUrl: string | undefined;
  _id: string;
  author: string;
  role: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface AnnouncementsState {
  items: Announcement[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AnnouncementsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchAnnouncements = createAsyncThunk('announcements/fetchAnnouncements', async () => {
  const response = await fetch('http://localhost:5000/announcements');
  const data = await response.json();
  return data;
});

const announcementsSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default announcementsSlice.reducer;