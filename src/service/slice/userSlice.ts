import { createSlice } from '@reduxjs/toolkit';
import { TUserState } from '../actions/actionTypes';
import { userSignUp } from '../actions/userActions';

const initialState: TUserState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    mailing: false,
  },
  isLoading: false,
  auth: false,
  error: '',
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, () => {
        const newState: TUserState = {
          user: {
            firstName: '',
            lastName: '',
            email: '',
            mailing: false,
          },
          isLoading: true,
          auth: false,
          error: '',
        };
        return newState;
      })
      .addCase(userSignUp.fulfilled, (state: TUserState, action) => {
        const newState = {
          ...state,
          user: action.payload,
          isLoading: false,
          auth: true,
        };
        return newState;
      })
      .addCase(userSignUp.rejected, (state: TUserState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          error: action.payload,
        };
        return newState;
      });
  },
});

export default userSlice.reducer;