import { IUser } from './types';

// универсальные шапка
type UniversalType = {
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
  body?: string;
};

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

//универсальный запрос
export const universalRequestType = (url: string, options?: UniversalType) => {
  return fetch(url, options).then(checkResponse);
};

// стандартный ответ от сервера
export type ResponseDefaultType<S = string> = {
  success: boolean;
  message: S;
};

const api = 'http://localhost:3001';

//content

export const getDiscipline = (name: string) =>
  universalRequestType(`${api}/dis/id`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(name),
  });


// user
export const getRegistrationUser = (data: IUser) =>
  universalRequestType(`${api}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      lastName: data.lastName,
      firstName: data.firstName,
      phone: data.phone,
      mailing: data.mailing,
      agreement: data.agreement,
    }),
  });