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
    switchNextMonth: (state) => {
      state.currentMonth += 1;
    },
    switchPreviousMonth: (state) => {
      state.currentMonth -= 1;
    },
  },
});

export const { switchNextMonth, switchPreviousMonth } = switchSlice.actions;

export default switchSlice.reducer;
