import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    selectedIsLoading,
    selectedError,
} from 'redux/contacts/contacts-selectors';
import { getContactsThunk } from 'redux/contacts/contacts-thunk';
import { Title, ContactsTitle } from '../../components/App.styled';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import Loader from 'components/Loader/Loader';

const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectedIsLoading);
    const error = useSelector(selectedError);

    useEffect(() => {
        dispatch(getContactsThunk());
    }, [dispatch]);

    return (
        <main>
            <Title>Phonebook</Title>
            <ContactForm />
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            {isLoading && !error && <Loader />}
            <ContactList />
        </main>
    );
};

export default ContactsPage;
