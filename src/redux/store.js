import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice, filterReducer } from './reducers';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    // filter: filterReducer,
  },
});
