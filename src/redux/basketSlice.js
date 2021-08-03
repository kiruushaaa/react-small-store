import { createSlice } from '@reduxjs/toolkit';
import { itemsComparator } from '../utils/utils';

const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    hydrate: (state, { payload }) => payload,
    addItem: (state, { payload }) => {
      const item = state.find(item => itemsComparator(item, payload));

      if (item) {
        item.count = item.count + 1;
      } else {
        state.push({ ...payload, count: 1 });
      }
    },

    changeAttribute: (state, { payload }) => {
      const item = state.find(item => itemsComparator(item, payload));

      item.attributes[payload.name] = payload.value;
    },

    increaseCount: (state, { payload }) => {
      const item = state.find(item => itemsComparator(item, payload));
      item.count = item.count + 1;
    },

    reduceCount: (state, { payload }) => {
      const item = state.find(item => itemsComparator(item, payload));

      if (item.count === 1) {
        return state.filter(item => !itemsComparator(item, payload));
      } else {
        item.count = item.count - 1;
      }
    },
  },
});

export const { hydrate, addItem, changeAttribute, increaseCount, reduceCount } =
  basketSlice.actions;

export default basketSlice.reducer;
