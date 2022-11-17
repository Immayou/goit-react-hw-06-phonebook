import { useState, useEffect } from 'react';

import ContainerBox from '../ContainerBox/ContainerBox';

import Box from '../Box/Box';

import ContactForm from '../ContactForm/ContactForm';

import ContactList from '../ContactList/ContactList';

import Filter from '../Filter/Filter';

import { Wrapper, ContactsTitle } from './App.styled';

import { useSelector } from 'react-redux';

export const App = () => {
  const contacts1 = useSelector(state => state.contacts);

  const filter2 = useSelector(state => state.filter);

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('addedContacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('addedContacts', JSON.stringify(contacts));
    if (contacts.length === 0) {
      window.localStorage.removeItem('addedContacts');
    }
  }, [contacts]);

  const formSubmitHandler = data => {
    const checkIfNewContactAlreadyExists = contacts.find(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
    checkIfNewContactAlreadyExists
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevState => [data, ...prevState]);
  };

  const filterHandler = e => {
    setFilter(e.currentTarget.value);
  };

  const getFiltredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
    return visibleContacts;
  };

  const deleteContact = idToDelete => {
    setContacts(prevState => prevState.filter(({ id }) => id !== idToDelete));
  };

  const contactsToRender = getFiltredContacts();
  const isEmptyArrayOfContacts = contacts.length !== 0;

  return (
    <Wrapper>
      <ContainerBox>
        <Box>
          <ContactForm submitData={formSubmitHandler} />
          {isEmptyArrayOfContacts && (
            <div>
              <ContactsTitle>Contacts</ContactsTitle>
              <Filter value={filter} filterInput={filterHandler} />
              <ContactList
                contacts={contactsToRender}
                onDeleteContact={deleteContact}
              />
            </div>
          )}
        </Box>
      </ContainerBox>
    </Wrapper>
  );
};
