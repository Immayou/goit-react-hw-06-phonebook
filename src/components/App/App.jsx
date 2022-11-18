// import { useState, useEffect } from 'react';

import ContainerBox from '../ContainerBox/ContainerBox';

import Box from '../Box/Box';

import ContactForm from '../ContactForm/ContactForm';

import ContactList from '../ContactList/ContactList';

import Filter from '../Filter/Filter';

import { Wrapper, ContactsTitle } from './App.styled';

import { useSelector } from 'react-redux';

export const App = () => {
  const addedContacts = useSelector(state => state.contacts);

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

  const isArrayOfContactsEmpty = addedContacts.length !== 0;

  return (
    <Wrapper>
      <ContainerBox>
        <Box>
          <ContactForm />
          {isArrayOfContactsEmpty && (
            <div>
              <ContactsTitle>Contacts</ContactsTitle>
              <Filter />
              <ContactList />
            </div>
          )}
        </Box>
      </ContainerBox>
    </Wrapper>
  );
};
