import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TDisciplineState } from "../actions/actionTypes";
import { IDiscipline } from "../utils/types";

const initialState: TDisciplineState = {

  discipline:
  {
    name: 'Skateboarding',
    images_url: ['./images/Image.png',],
    description: 'Скейтбординг (англ. skateboarding) — экстремальный вид спорта, связанный с катанием, преодолением препятствий и акробатическими трюками на доске с роликами. Скейтбординг привлекает не только молодёжь, но и людей среднего возраста. Это можно объяснить его зрелищностью и доступностью. Как вид спорта скейтборд популярен давно, но международным спортивным комитетом он признан относительно недавно и стал официальным видом спорта.',
    rules: "123"
  },
  isLoading: false,
  error: ''
}

const disciplineSlice = createSlice({
  name: 'discipline',
  initialState: initialState,
  reducers: {
    disciplineFetching(state) {
      state.isLoading = true;
    },
    disciplineFetchingSuccess(state, action: PayloadAction<IDiscipline>) {
      state.isLoading = false;
      state.error = '';
      state.discipline = action.payload

    },
    disciplineFetchingError(state, action: PayloadAction<string>) {
      state.error = action.payload
    }

  }

})
export default disciplineSlice.reducer;
export const { disciplineFetching, disciplineFetchingSuccess, disciplineFetchingError } = disciplineSlice.actions