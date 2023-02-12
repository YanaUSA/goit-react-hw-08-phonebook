import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, ContactsTitle } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from '../redux/contacts/contactsThunk';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContactsThunk());
    }, [dispatch]);

    return (
        <Container>
            <Title>Phonebook</Title>
            <ContactForm />
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            <ContactList />
        </Container>
    );
};
