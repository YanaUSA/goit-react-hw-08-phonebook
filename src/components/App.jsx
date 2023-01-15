import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { nanoid } from 'nanoid';
import { Container, Title, ContactsTitle } from './App.styled';
import { useState, useEffect } from 'react';

export const App = () => {
  const contactsBase = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? contactsBase;
  });
  const [filter, setFilter] = useState('');

  // console.log(first)

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = obj => {
    const newContact = {
      id: nanoid(),
      ...obj,
    };

    contacts.find(({ name }) => name.toLowerCase() === obj.name.toLowerCase())
      ? alert(`${obj.name} is already in contacts`)
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const filterContact = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const getFilteredContact = () => {
    const normalizedFilterValue = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm addContact={addContact} contacts={contacts} />

      <ContactsTitle>Contacts</ContactsTitle>

      <Filter filterValue={filter} onChange={filterContact} />

      <ContactList
        contacts={getFilteredContact()}
        deleteContact={deleteContact}
      />
    </Container>
  );
};
