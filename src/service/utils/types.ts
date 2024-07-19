export interface IDiscipline {
  name: string,
  imagesUrl: string[],
  description: string,
  rules: string
}

export type TdisciplinesButtons = {
  name: string;
  to: string
};

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