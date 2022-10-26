import { configureStore } from '@reduxjs/toolkit';
import switchReducer from './switchSlice';

export const store = configureStore({
  reducer: switchReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
