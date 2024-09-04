export interface IDiscipline {
  name: string,
  imagesUrl: string[],
  description: string,
  rules: string,
  isfull?: boolean,
}

export type TdisciplinesButtons = {
  name: string;
  to: string
};

export interface IUser {
  firstName: string
  lastName: string
  phone: string
  email: string
}

export interface IRegistrationData extends IUser {
  password?: string
  doublePassword?: string
  mailing: boolean
  agreement: boolean
}

export type TStringChangeInput = 'firstName' | 'lastName' | 'phone' | 'email';

export type TBoolChangeInput = 'mailing' | 'agreement';