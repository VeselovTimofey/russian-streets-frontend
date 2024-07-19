import { getRegistrationUser } from '../utils/api';
import { setCookie } from '../utils/cookes';
import { IUser } from '../utils/types';
import { useAppDispatch } from '../hooks/hooks';
import { addUserSuccess, addUserError } from '../slice/userSlice';

// регистрация
export const RegUser = async (data: IUser) => {
  const dispatch = useAppDispatch();
  getRegistrationUser(data)
    .then((res) => {
      if (res.success) {
        setCookie('token', res.accessToken, { expires: 1200 });
        localStorage.setItem('jwt', res.refreshToken);
        dispatch(
          addUserSuccess(res.user));
      }
    }).catch((err) => dispatch(addUserError(err)));
};
