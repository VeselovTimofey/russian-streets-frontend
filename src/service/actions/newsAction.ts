import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLastNews } from '../../utils/api/newsApi';
import { type INews } from '../../utils/interface/newsInterface';

const lastNewsAction = createAsyncThunk<INews[], void, { rejectValue: string }>(
  'news/getLastNews', async (_, { rejectWithValue }) => {
    try {
      const response = await getLastNews();
      if (!response.ok) {
        throw new Error('Не удалось загрузить новости.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось загрузить новости.');
    }
  },
);

export { lastNewsAction };