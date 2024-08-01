import { createSlice } from '@reduxjs/toolkit';
import { TDisciplineState } from '../actions/actionTypes';
import {disciplinesNames, disciplineContent} from '../actions/disciplineAction';


const initialState: TDisciplineState = {
  disciplines:
  [{
    name: '',
    imagesUrl: [''],
    description: '',
    rules: '',
  }],
  isLoading: false,
  error: '',
};

const disciplineSlice = createSlice({
  name: 'discipline',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(disciplinesNames.pending, (state: TDisciplineState) => {
        const newState = {
          ...state,
          error: '',
          isLoading: true,
        };
        return newState;
      })
      .addCase(disciplinesNames.fulfilled, (_, action) => {
        const newState: TDisciplineState = {
          disciplines: [],
          error: '',
          isLoading: false,
        };
        action.payload.forEach((element) => {
          newState.disciplines.push({
            name: element.name,
            imagesUrl: [''],
            description: '',
            rules: '',
          })
        })
        return newState;
      })
      .addCase(disciplinesNames.rejected, (state: TDisciplineState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          error: action.payload,
        }
        return newState;
      })
      .addCase(disciplineContent.pending, (state: TDisciplineState) => {
        const newState = {
          ...state,
          error: '',
          isLoading: true,
        };
        return newState;
      })
      .addCase(disciplineContent.fulfilled, (state: TDisciplineState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          discipline: action.payload,
        };
        return newState;
      })
      .addCase(disciplineContent.rejected, (state: TDisciplineState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          error: action.payload,
        }
        return newState;
      })
  },
});
export default disciplineSlice.reducer;