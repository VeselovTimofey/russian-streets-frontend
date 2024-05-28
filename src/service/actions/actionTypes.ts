import { ADD_USER } from "../utils/constans"
import { IDiscipline, IUser } from "../utils/types";

export type TAddUserAction = {
  type: typeof ADD_USER;
  user: IUser
}
export type TUserState = {
  user: IUser
  auth: boolean
  error: string
}

export interface TDisciplineState {
  discipline: IDiscipline
  isLoading: boolean,
  error: string
}