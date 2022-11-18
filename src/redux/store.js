import { configureStore } from '@reduxjs/toolkit';
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistStore,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from 'redux-persist';
import { contactsSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// // import {
// //   FLUSH,
// //   PAUSE,
// //   PERSIST,
// //   persistStore,
// //   PURGE,
// //   REGISTER,
// //   REHYDRATE,
// // } from 'redux-persist';
// import { persistedContactsReducer, filterSlice } from './slice';

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsReducer,
//     filter: filterSlice.reducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);
