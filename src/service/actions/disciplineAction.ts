import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDisciplinesNames } from '../../utils/api/disciplineApi';
import { IDiscipline } from '../utils/types';


const disciplinesNames = createAsyncThunk<IDiscipline[], void, { rejectValue: string }>(
  'discipline/getAllDiscipline', async (_, { rejectWithValue }) => {
    try {
      const response = await getDisciplinesNames();
      if (!response.ok) {
        throw new Error('Не удалось получить название дисциплин.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось получить название дисциплин.');
    }
  },
);

export default disciplinesNames;