import { ADD_USER } from '../utils/constant';
import { IDiscipline, IUser } from '../utils/types';

export type TAddUserAction = {
  type: typeof ADD_USER;
  user: IUser
};

export type TUserState = {
  user: IUser,
  isLoading: boolean,
  auth: boolean,
  error: string | undefined,
};

export interface TDisciplineState {
  disciplines: IDiscipline[],
  currentDiscipline: IDiscipline,
  isLoading: boolean,
  error: string | undefined,
}