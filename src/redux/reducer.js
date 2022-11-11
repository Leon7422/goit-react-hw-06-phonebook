import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './action';

export const contactsReducer = createReducer([], {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const contactToDelete = state.findIndex(task => task.id === action.payload);
    state.splice(contactToDelete, 1);
  },
});
export const filterReducer = createReducer('', {});
