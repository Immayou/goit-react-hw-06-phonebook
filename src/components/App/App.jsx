// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getContacts } from '../../redux/contactSlice';

import ContainerBox from '../ContainerBox/ContainerBox';

import Box from '../Box/Box';

import ContactForm from '../ContactForm/ContactForm';

import ContactList from '../ContactList/ContactList';

import Filter from '../Filter/Filter';

import { Wrapper, ContactsTitle } from './App.styled';

export const App = () => {
  const addedContacts = useSelector(getContacts);

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('addedContacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('addedContacts', JSON.stringify(contacts));
  //   if (contacts.length === 0) {
  //     window.localStorage.removeItem('addedContacts');
  //   }
  // }, [contacts]);
  // const enteredFilterValue = useSelector(state => state.filter);

  // const getFiltredContacts = () => {
  //   const normalizeFilter = enteredFilterValue.toLowerCase();
  //   const visibleContacts = addedContacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizeFilter)
  //   );
  //   return visibleContacts;
  // };

  // const contactsToRender = getFiltredContacts();

  const isArrayOfContactsEmpty = addedContacts.length !== 0;

  return (
    <Wrapper>
      <ContainerBox>
        <Box>
          <ContactForm />
          {isArrayOfContactsEmpty && (
            <div>
              <ContactsTitle
              // comtactsToRender={contactsToRender}
              >
                Contacts
              </ContactsTitle>
              <Filter />
              <ContactList />
            </div>
          )}
        </Box>
      </ContainerBox>
    </Wrapper>
  );
};
