import api from "./api";

async function getDisciplinesNames() {
  return api({
    method: 'GET',
    endPath: '/disciplines',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
}

async function getShortСontentofDiscipline(name: string) {
  return api({
    method: 'GET',
    endPath: '/discipline',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({
      name,
    }),
  });
}

async function getFullContentofDiscipline(name: string) {
  return api({
    method: 'GET',
    endPath: '/full-discipline',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({
      name,
    }),
  });
}

export { getDisciplinesNames, getShortСontentofDiscipline, getFullContentofDiscipline };