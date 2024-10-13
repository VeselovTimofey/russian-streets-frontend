import { createSlice } from '@reduxjs/toolkit';
import { type IAboutUsState } from '../../utils/interface/aboutUsInterface';
import { DEFAULT_ABOUT_US } from '../../utils/constans/defaultAboutUsConstans';
import { aboutUsAction } from '../actions/aboutUsAction';

const initialState: IAboutUsState = {
  aboutUs: DEFAULT_ABOUT_US,
  isLoaded: false,
  isLoading: false,
  error: '',
};

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(aboutUsAction.pending, (state: IAboutUsState) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(aboutUsAction.fulfilled, (state: IAboutUsState, action) => {
        state.aboutUs = action.payload;
        state.isLoading = false;
      })
      .addCase(aboutUsAction.rejected, (state: IAboutUsState, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default aboutUsSlice.reducer;