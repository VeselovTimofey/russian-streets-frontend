import { createSlice } from '@reduxjs/toolkit';
import { type INewsState } from '../../utils/interface/newsInterface';
import { lastNewsAction } from '../actions/newsAction';


const initialState: INewsState = {
  lastNews: [
    {
      id: '-1',
      name: '',
      imageUrl: '',
      description: '',
    },
  ],
  news: [
    {
      id: '-1',
      name: '',
      imageUrl: '',
      description: '',
      pubDate: '01-01-1990',
    },
  ],
  isLoading: false,
  error: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(lastNewsAction.pending, (state: INewsState) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(lastNewsAction.fulfilled, (state: INewsState, action) => {
        state.lastNews = action.payload;
        state.isLoading = false;
        action.payload.forEach((newNews) => {
          if (!(state.news.find(currentNews => currentNews.id === newNews.id))) {
            state.news.push(newNews);
          }
        });
      })
      .addCase(lastNewsAction.rejected, (state: INewsState, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default newsSlice.reducer;