import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUser, ILoginCredentials } from '../utils/types';
import { signUpApi, signInApi } from '../../utils/api/authApi';

const userSignUp = createAsyncThunk<IUser, IUser, { rejectValue: string }>(
  'auth/signup', async (userInfo, { rejectWithValue }) => {
    try {
      const response = await signUpApi(userInfo);
      if (!response.ok) {
        throw new Error('Не удалось зарегистрировать пользователя.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось зарегистрировать пользователя.');
    }
  },
);

const userSignIn = createAsyncThunk<IUser, ILoginCredentials, { rejectValue: string }>(
  'auth/signin', async (loginCredentials, { rejectWithValue }) => {
    try {
      const response = await signInApi(loginCredentials);
      if (!response.ok) {
        throw new Error('Не удалось авторизоваться.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось авторизоваться.');
    }
  },
);

export { userSignUp, userSignIn };