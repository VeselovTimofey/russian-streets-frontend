export interface IUser {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
}
  
export interface IRegistrationData extends IUser {
  password?: string,
  doublePassword?: string,
  mailing: boolean,
  agreement: boolean,
}

export interface IUserState {
  registrationData: IRegistrationData,
  user: IUser,
  isLoading: boolean,
  auth: boolean,
  error: string | undefined,
}

export interface ILoginCredentials {
  email: string,
  password: string,
}
  
export type TStringChangeInput = 'firstName' | 'lastName' | 'phone' | 'email';
export type TBoolChangeInput = 'mailing' | 'agreement';