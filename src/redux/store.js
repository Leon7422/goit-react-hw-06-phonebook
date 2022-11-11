import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducer';

export default configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
