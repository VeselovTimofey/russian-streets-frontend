import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, TUserState } from "../types";

const initialState: TUserState = {
  user: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    mailing: false,
    agreement: false,
  },
  auth: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addUserS: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.auth = true;
    }
  }
})

//export default userSlice
export const { addUserS } = userSlice.actions