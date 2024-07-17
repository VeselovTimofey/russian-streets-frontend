import { createSlice } from '@reduxjs/toolkit';
import { TUserState } from '../actions/actionTypes';

const initialState: TUserState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    mailing: false,
  },
  auth: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserSuccess: (state, action) => {
      const newState = {
        ...state,
        user: action.payload,
        auth: true,
      };
      return newState;
    },
    addUserError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addUserSuccess, addUserError } = userSlice.actions;