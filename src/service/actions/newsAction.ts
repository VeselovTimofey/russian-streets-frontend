import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLastNews, getPageNews } from '../../utils/api/newsApi';
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

const pageNewsAction = createAsyncThunk<INews[], { page: number }, { rejectValue: string }>(
  'news/getPageNews', async ({ page }, { rejectWithValue }) => {
    try {
      const response = await getPageNews(page);
      if (!response.ok) {
        throw new Error('Не удалось загрузить страницу с новостями.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось загрузить страницу с новостями.');
    }
  },
);

export { lastNewsAction, pageNewsAction };