import { Action, ActionCreator } from "@reduxjs/toolkit"
import { userReg } from "../services/action/userAction"
import { AppDispatch, AppStore, RootState } from "../services/store"
import { ThunkAction } from "redux-thunk"
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux"
import { rootReducer } from "../services/reducer/root"

export interface IUser {
  firstName: string
  lastName: string
  phone?: string
  email: string
  password?: string
  doublePassword?: string
  mailing: boolean
  agreement?: boolean
}

export type ActionTypes = userReg


export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, ActionTypes>
>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
