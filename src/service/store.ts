import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './slice/root';

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};