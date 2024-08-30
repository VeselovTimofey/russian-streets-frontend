import { IUser } from "../../service/utils/types";
import api from "./api";

async function signUpApi(user: IUser) {
  return api({
    method: 'POST',
    endPath: '/user',
    headers: new Headers({ 'Content-Type': 'application/json'}),
    body: JSON.stringify(user),
  });
}

export { signUpApi };