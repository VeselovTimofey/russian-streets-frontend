import { ADD_USER } from '../utils/constant';
import { IDiscipline, IUser, IRegistrationData } from '../utils/types';

export type TAddUserAction = {
  type: typeof ADD_USER;
  user: IUser
};

export type TUserState = {
  registrationData: IRegistrationData,
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