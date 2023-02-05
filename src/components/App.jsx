import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, ContactsTitle } from './App.styled';

import { useDispatch, useSelector } from 'react-redux';
import {
    addedContact,
    deletedContact,
    filteredContact,
} from '../redux/contacts/contactsSlice';
import { contactsData, filteredData } from '../redux/selectors/selectors';

export const App = () => {
    const contacts_store = useSelector(contactsData);
    const filterByName = useSelector(filteredData);
    const dispatch = useDispatch();

    // const [contacts, setContacts] = useState(() => {
    //     return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
    // });

    // useEffect(() => {
    //     window.localStorage.setItem('contacts', JSON.stringify(contacts));
    // }, [contacts]);

    const addContact = obj => {
        const newContact = {
            id: nanoid(),
            ...obj,
        };

        contacts_store.find(
            ({ name }) => name.toLowerCase() === obj.name.toLowerCase()
        )
            ? alert(`${obj.name} is already in contacts`)
            : dispatch(addedContact(newContact));
    };

    const deleteContact = id => {
        dispatch(deletedContact(id));
    };

    const filteredName = filterValue => {
        console.log('filterValue', filterValue);
        dispatch(filteredContact(filterValue));
    };

    const getFilteredContact = () => {
        const nameFiltered = contacts_store.filter(({ name }) =>
            name.toLowerCase().includes(filterByName)
        );
        return nameFiltered;
    };

    return (
        <Container>
            <Title>Phonebook</Title>

            <ContactForm addContact={addContact} contacts={contacts_store} />

            <ContactsTitle>Contacts</ContactsTitle>

            <Filter addFilterValue={filteredName} />

            <ContactList
                contacts={getFilteredContact()}
                deleteContact={deleteContact}
            />
        </Container>
    );
};
