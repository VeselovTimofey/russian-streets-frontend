import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TDisciplineState } from "../actions/actionTypes";
import { IDiscipline } from "../../utils/types";

const initialState: TDisciplineState = {

  discipline:
  {
    name: '',
    images_url: [],
    description: '',
    rules: '',
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