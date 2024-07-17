import { createSlice } from '@reduxjs/toolkit';
import { TDisciplineState } from '../actions/actionTypes';


const initialState: TDisciplineState = {

  discipline:
  {
    name: 'Skateboarding',
    images_url: ['./images/Image.png'],
    description: 'Скейтбординг (англ. skateboarding) — экстремальный вид спорта, связанный с катанием, преодолением препятствий и акробатическими трюками на доске с роликами. Скейтбординг привлекает не только молодёжь, но и людей среднего возраста. Это можно объяснить его зрелищностью и доступностью. Как вид спорта скейтборд популярен давно, но международным спортивным комитетом он признан относительно недавно и стал официальным видом спорта.',
    rules: '123',
  },
  isLoading: false,
  error: '',
};

const disciplineSlice = createSlice({
  name: 'discipline',
  initialState: initialState,
  reducers: {
    disciplineFetching(state) {
      const newState = {
        ...state,
        error: '',
        isLoading: true,
      };
      return newState;
    },
    disciplineFetchingSuccess(state, action) {
      const newState = {
        ...state,
        isLoading: false,
        discipline: action.payload,
      };
      return newState;
    },
    disciplineFetchingError(state, action) {
      const newState = {
        ...state,
        error: action.payload,
      };
      return newState;
    },
  },
});
export default disciplineSlice.reducer;
export const { disciplineFetching, disciplineFetchingSuccess, disciplineFetchingError } = disciplineSlice.actions;