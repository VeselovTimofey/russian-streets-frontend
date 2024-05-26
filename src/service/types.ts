import { ADD_USER } from "./constans"

export type TAddUserAction = {
  type: typeof ADD_USER;
  user: IUser
}

export type TUserState = {
  user: IUser
  auth: boolean
}

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