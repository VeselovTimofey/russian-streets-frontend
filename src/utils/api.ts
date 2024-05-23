// универсальные шапка
type universalType = {
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
  body?: string;
};
//универсальный запрос
export const universalRequestType = (url: string, options?: universalType) => {
  return fetch(url, options).then(checkResponse)
}

// стандартный ответ от сервера
export type ResponseDefaultType<S = string> = {
  success: boolean;
  message: S;
};

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const api = 'http://localhost:5173/dis'

export const getDisciplins = () =>
  universalRequestType(`${api}/dis`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

export const getRegistrationUser = (data: TUser) =>
  universalRequestType(`${api}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      lastName: data.lastName,
      firstName: data.firstName,
      phone: data.phone,
      mailing: data.mailing,
      agreement: data.agreement
    }),
  })
