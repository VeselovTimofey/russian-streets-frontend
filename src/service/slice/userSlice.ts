import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { TUserState } from '../actions/actionTypes';
import { userSignUp } from '../actions/userActions';
import { IRegistrationData } from '../utils/types';

const initialState: TUserState = {
  registrationData: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    mailing: false,
    agreement: false,
  },
  user: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  },
  isLoading: false,
  auth: false,
  error: '',
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userChange: (state, action: PayloadAction<Partial<IRegistrationData>>) => {
      Object.assign(state.registrationData, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state: TUserState) => {
        const newState = {
          ...state,
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
export const { userChange } = userSlice.actions;