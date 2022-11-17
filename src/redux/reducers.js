import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      return state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

// export const filterReducer = ('', action) => {
//     'filter/setFilter':
// })

export const { addContact, deleteContact } = createSlice.actions;
