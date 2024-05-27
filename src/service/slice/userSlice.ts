import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../utils/types";
import { TUserState } from "../actions/actionTypes";

const initialState: TUserState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    mailing: false
  },
  auth: false,
  error: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserSuccess: (state, action: PayloadAction<IUser>) => {
      state.error,
        state.user = action.payload,
        state.auth = true
    },
    addUserError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export default userSlice.reducer
export const { addUserSuccess, addUserError } = userSlice.actions