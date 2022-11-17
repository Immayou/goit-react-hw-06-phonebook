import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilter(state, action) {
      return state === action.payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
