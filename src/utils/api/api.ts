import APIPATH from '../constans/apiConstans';

interface IApi extends RequestInit {
  endPath: string;
}

async function api({ endPath, ...options }: IApi): Promise<Response> {
  return fetch(APIPATH + endPath, {
    ...options,
  });
}

export default api;