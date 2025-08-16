import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice'; 
import announcementsReducer from './features/dashboard/announcementsSlice'; 
import whatsDueReducer from './features/dashboard/whatsDueSlice';       


export const store = configureStore({
  reducer: {
    auth: authReducer, 
    announcements: announcementsReducer,
    whatsDue: whatsDueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;