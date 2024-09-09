import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IUserState, IRegistrationData } from '../../utils/interface/userInterface';
import { userSignUp, userSignIn } from '../actions/userActions';

const initialState: IUserState = {
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
    registrationDataChange: (state, action: PayloadAction<Partial<IRegistrationData>>) => {
      Object.assign(state.registrationData, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state: IUserState) => {
        const newState = {
          ...state,
          isLoading: true,
          auth: false,
          error: '',
        };
        return newState;
      })
      .addCase(userSignUp.fulfilled, (state: IUserState, action) => {
        const newState = {
          ...state,
          user: action.payload,
          isLoading: false,
          auth: true,
        };
        return newState;
      })
      .addCase(userSignUp.rejected, (state: IUserState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          error: action.payload,
        };
        return newState;
      })
      .addCase(userSignIn.pending, (state: IUserState) => {
        const newState = {
          ...state,
          isLoading: true,
          auth: false,
          error: '',
        };
        return newState;
      })
      .addCase(userSignIn.fulfilled, (state: IUserState, action) => {
        const newState = {
          ...state,
          user: action.payload,
          isLoading: false,
          auth: true,
        };
        return newState;
      })
      .addCase(userSignIn.rejected, (state: IUserState, action) => {
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
export const { registrationDataChange } = userSlice.actions;