import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import disciplineSlice from './disciplineSlice';

export const rootReducer = combineReducers({
  user: userSlice,
  discipline: disciplineSlice,
});