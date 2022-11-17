import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions';

export const contactsReducer = createReducer([], {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload.id);
  },
});

// export const filterReducer = ('', action) => {
//     'filter/setFilter':
// })
