import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

const persistConfigFilter = {
  key: 'filter',
  storage,
};

export const persistedFilterReducer = persistReducer(
  persistConfigFilter,
  filterSlice.reducer
);

export const { setFilter } = filterSlice.actions;
