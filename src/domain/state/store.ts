import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import switchR from './switchSlice';
import switchSlice from './switchSlice';
import user from './user';

const rootReducer = combineReducers({
  switch: switchSlice,
  user: user,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
