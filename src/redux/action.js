import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});
export const deleteContact = createAction('contacts/delete');
