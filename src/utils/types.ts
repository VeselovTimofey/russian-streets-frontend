export interface IUser {
  firstName: string
  lastName: string
  phone?: string
  email: string
  password: string
  doublePassword: string
  mailing?: boolean
  agreement: boolean
}