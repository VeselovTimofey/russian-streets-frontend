import { createSlice } from '@reduxjs/toolkit';
import { type INewsState } from '../../utils/interface/newsInterface';
import { lastNewsAction, pageNewsAction, newsAction } from '../actions/newsAction';


const initialState: INewsState = {
  lastNews: [
    {
      id: '-1',
      name: '',
      imageUrl: '',
      description: '',
    },
  ],
  pageNews: [
    {
      id: '-1',
      name: '',
      imageUrl: '',
      description: '',
      pubDate: '01-01-1990',
    },
  ],
  currentNews: {
    id: '-1',
    name: '',
    imageUrl: '',
    description: '',
    pubDate: '01-01-1990',
  },
  savedNewsId: [],
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
            state.savedNewsId.push(newNews.id);
          }
        });
      })
      .addCase(lastNewsAction.rejected, (state: INewsState, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(pageNewsAction.pending, (state: INewsState) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(pageNewsAction.fulfilled, (state: INewsState, action) => {
        state.pageNews = action.payload;
        state.isLoading = false;
        action.payload.forEach((newNews) => {
          if (!(state.news.find(currentNews => currentNews.id === newNews.id))) {
            state.news.push(newNews);
            state.savedNewsId.push(newNews.id);
          }
        });
      })
      .addCase(pageNewsAction.rejected, (state: INewsState, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(newsAction.pending, (state: INewsState) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(newsAction.fulfilled, (state: INewsState, action) => {
        if (action.payload.alreadyInStore) {
          state.currentNews = state.news.find(news => news.id === action.payload.id);
        } else {
          state.currentNews = action.payload.news;
        }
      })
      .addCase(newsAction.rejected, (state: INewsState, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default newsSlice.reducer;