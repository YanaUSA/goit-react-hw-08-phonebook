import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Loader from './Loader/Loader';
import { Container, Title, ContactsTitle } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from '../redux/contacts/contactsThunk';
import { selectedIsLoading, selectedError } from '../redux/selectors/selectors';

export const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectedIsLoading);
    const error = useSelector(selectedError);

    useEffect(() => {
        dispatch(getContactsThunk());
    }, [dispatch]);

    return (
        <Container>
            <Title>Phonebook</Title>
            <ContactForm />
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            {isLoading && !error && <Loader />}
            <ContactList />
        </Container>
    );
};
