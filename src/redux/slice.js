// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact(state, action) {
//       state.push(action.payload);
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     setFilter(state, action) {
//       return action.payload;
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const { setFilter } = filterSlice.actions;
