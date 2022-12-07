import { createSlice } from '@reduxjs/toolkit';
import { UserRecord } from '../../types/user';

interface UserTasksState {
  currentUser: UserRecord;
}

const initialState: UserTasksState = {
  currentUser: {
    login: '',
    tasks: {},
  },
};

export const currentUser = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    setData: (state, data) => {
      state.currentUser = data.payload.payload;
    },
  },
});

export const { setData } = currentUser.actions;

export default currentUser.reducer;
