import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLastEvents, getDailyEvents, getEvent } from '../../utils/api/eventApi';
import { type IEvent } from '../../utils/interface/eventInterface';

const lastEventsAction = createAsyncThunk<IEvent[], void, { rejectValue: string }>(
  'events/getLastEvents', async (_, { rejectWithValue }) => {
    try {
      const response = await getLastEvents();
      if (!response.ok) {
        throw new Error('Не удалось загрузить последние события.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось загрузить последние события.');
    }
  },
);

const dailyEventsAction = createAsyncThunk<IEvent[], { date: string }, { rejectValue: string }>(
  'events/getDailyEvents', async ({ date }, { rejectWithValue }) => {
    try {
      const response = await getDailyEvents(date);
      if (!response.ok) {
        throw new Error('Не удалось загрузить все события этой даты.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось загрузить все события этой даты.');
    }
  },
);

const eventAction = createAsyncThunk<IEvent[], { id: string }, { rejectValue: string }>(
  'events/getEvent', async ({ id }, { rejectWithValue }) => {
    try {
      const response = await getEvent(id);
      if (!response.ok) {
        throw new Error('Не удалось загрузить событие.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось загрузить событие.');
    }
  },
);

export { lastEventsAction, dailyEventsAction, eventAction };