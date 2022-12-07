import { createSlice } from '@reduxjs/toolkit';

import dayjs from 'dayjs';

export interface SwitchState {
  currentMonth: number;
}

const initialState: SwitchState = {
  currentMonth: dayjs().month(),
};

export const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    switchNextMonth: (state, action) => {
      console.log(action);
      state.currentMonth += action.payload.payload;
      console.log(state.currentMonth);
    },
    switchPreviousMonth: (state) => {
      state.currentMonth -= 1;
    },
  },
});

export const { switchNextMonth, switchPreviousMonth } = switchSlice.actions;

const switchReducer = switchSlice.reducer;

export default switchReducer;
