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
    isfull: false,
  }],
  currentDiscipline: {
    name: '',
    imagesUrl: [''],
    description: '',
    rules: '',
  },
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
      .addCase(disciplinesNames.fulfilled, (state: TDisciplineState, action) => {
        const newState: TDisciplineState = {
          ...state,
          disciplines: [],
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
        };
        const discipline = newState.disciplines.find(discipline => discipline.name === action.payload.name);
        if ( typeof discipline !== "undefined" ) {
          discipline.imagesUrl = newState.currentDiscipline.imagesUrl = action.payload.imagesUrl;
          discipline.description = newState.currentDiscipline.description = action.payload.description;
          discipline.rules = newState.currentDiscipline.rules = action.payload.rules;
          discipline.isfull = true;
        }
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