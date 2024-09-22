import api from './api';

async function getLastNews() {
  return api({
    method: 'GET',
    endPath: '/news',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
}

export { getLastNews };