import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDisciplinesNames, getShortСontentofDiscipline, getFullContentofDiscipline } from '../../utils/api/disciplineApi';
import { IDiscipline } from '../utils/types';
import { IDisciplineContent } from './actionTypes';


const disciplinesNames = createAsyncThunk<IDiscipline[], void, { rejectValue: string }>(
  'discipline/getAllDisciplinesNames', async (_, { rejectWithValue }) => {
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

const disciplineContent = createAsyncThunk<IDiscipline[], IDisciplineContent, { rejectValue: string }>(
  'discipline/getDisciplineContent', async ( props, { rejectWithValue }) => {
    const {name, isFullContent} = props;
    try {
      const response = isFullContent ? await getFullContentofDiscipline(name) : await getShortСontentofDiscipline(name);
      if (!response.ok) {
        throw new Error('Не удалось получить иноформацию о дисциплине.');
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

export  {disciplinesNames, disciplineContent};