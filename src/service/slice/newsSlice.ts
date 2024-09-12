import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  lastNews: [
    {
      id: '-1',
      name: '',
      image_urls: [''],
      discription: '',
    },
  ],
  news: [
    {
      id: '-1',
      name: '',
      image_urls: [''],
      discription: '',
      pub_date: '01-01-1990',
    },
  ],
  isLoading: false,
  error: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {},
});

export default newsSlice.reducer;