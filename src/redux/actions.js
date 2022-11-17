import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contact/addContact', newContact => {
  return {
    payload: {
      name: newContact.name,
      number: newContact.number,
      id: nanoid(),
    },
  };
});

export const deleteContact = createAction('contact/deleteContact');
export const setFilter = createAction('filter/setFilter');
