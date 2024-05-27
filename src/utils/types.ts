export interface IDiscipline {
  name: string,
  images_url: string[],
  description: string,
  rules: string

}
export type TdisciplinesButtons = {
  name: string;
  to: string
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