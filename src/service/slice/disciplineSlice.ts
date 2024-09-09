import { createSlice } from '@reduxjs/toolkit';
import { IDisciplineState } from '../../utils/interface/disciplineInterface';
import { disciplinesNames, disciplineContent } from '../actions/disciplineAction';
import { DEFAULT_DISCIPLINE } from '../../utils/constans/default-discipline-constans';


const initialState: IDisciplineState = {
  disciplines: [ DEFAULT_DISCIPLINE ],
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
      .addCase(disciplinesNames.pending, (state: IDisciplineState) => {
        const newState = {
          ...state,
          error: '',
          isLoading: true,
        };
        return newState;
      })
      .addCase(disciplinesNames.fulfilled, (state: IDisciplineState, action) => {
        const newState: IDisciplineState = {
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
            isfull: false,
          });
        });
        return newState;
      })
      .addCase(disciplinesNames.rejected, (state: IDisciplineState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          error: action.payload,
        };
        return newState;
      })
      .addCase(disciplineContent.pending, (state: IDisciplineState) => {
        const newState = {
          ...state,
          error: '',
          isLoading: true,
        };
        return newState;
      })
      .addCase(disciplineContent.fulfilled, (state: IDisciplineState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          disciplines: state.disciplines.map(discipline => discipline),
          currentDiscipline: {
            name: '',
            imagesUrl: [''],
            description: '',
            rules: '',
          },
        };
        const disciplineIndex = newState.disciplines.findIndex(discipline => discipline.name === action.payload[0].name);
        if (newState.disciplines[disciplineIndex].isfull) {
          newState.currentDiscipline = newState.disciplines[disciplineIndex];
        } else {
          newState.currentDiscipline = newState.disciplines[disciplineIndex] = action.payload[0];
          newState.disciplines[disciplineIndex].isfull = true;
        } 
        newState.isLoading = false;
        return newState;
      })
      .addCase(disciplineContent.rejected, (state: IDisciplineState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          error: action.payload,
        };
        return newState;
      });
  },
});
export default disciplineSlice.reducer;