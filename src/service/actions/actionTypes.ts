import { ADD_USER } from '../utils/constant';
import { IDiscipline, IUser } from '../utils/types';

export type TAddUserAction = {
  type: typeof ADD_USER;
  user: IUser
};

export type TUserState = {
  user: IUser
  auth: boolean
  error: string
};

export interface TDisciplineState {
  disciplines: IDiscipline[],
  currentDiscipline: IDiscipline,
  isLoading: boolean,
  error: string | undefined,
}