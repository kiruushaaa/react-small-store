import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    defaultCurrency: 'USD',
    isLayoutMasked: false,
  },
  reducers: {
    changeCurrency: (state, { payload }) => {
      state.defaultCurrency = payload;
    },
    appendMask: state => {
      state.isLayoutMasked = true;
    },
    removeMask: state => {
      state.isLayoutMasked = false;
    },
  },
});

export const { changeCurrency, appendMask, removeMask } = appSlice.actions;

export default appSlice.reducer;
