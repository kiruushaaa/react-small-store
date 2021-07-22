import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import basketSlice from './basketSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    basket: basketSlice,
  },
});

export default store;
