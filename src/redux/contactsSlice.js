import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; //
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { value: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.value.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const contactToDelete = state.value.findIndex(
        task => task.id === action.payload
      );
      state.value.splice(contactToDelete, 1);
    },
  },
});

const persistConfigContacts = {
  key: 'contact',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(
  persistConfigContacts,
  contactsSlice.reducer
);
