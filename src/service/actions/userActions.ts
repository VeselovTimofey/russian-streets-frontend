import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUser } from '../utils/types';
import { signUpApi } from '../../utils/api/authApi';

const userSignUp = createAsyncThunk<IUser, IUser, { rejectValue: string }>(
  'auth/signup', async (userInfo, { rejectWithValue }) => {
    try {
      const response = await signUpApi(userInfo);
      if (!response.ok) {
        throw new Error('Не удалось зарегистрировать пользавателя.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось зарегистрировать пользавателя.');
    }
  });

export { userSignUp };