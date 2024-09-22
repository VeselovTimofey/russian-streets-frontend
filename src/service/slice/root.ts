import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import disciplineSlice from './disciplineSlice';
import newsSlice from './newsSlice';

export const rootReducer = combineReducers({
  user: userSlice,
  discipline: disciplineSlice,
  news: newsSlice,
});