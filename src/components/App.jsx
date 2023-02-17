import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getContactsThunk } from 'redux/contacts/contacts-thunk';
import {
    selectedIsLoading,
    selectedError,
} from 'redux/contacts/contacts-selectors';
import AppLayout from './AppLayout/AppLayout';
import { Title, ContactsTitle } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Loader from './Loader/Loader';

export const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectedIsLoading);
    const error = useSelector(selectedError);

    useEffect(() => {
        dispatch(getContactsThunk());
    }, [dispatch]);

    return (
        <>
            <AppLayout>
                {/* <Routes> */}
                <Title>Phonebook</Title>
                <ContactForm />
                <ContactsTitle>Contacts</ContactsTitle>
                <Filter />
                {isLoading && !error && <Loader />}
                <ContactList />
                {/* </Routes> */}
            </AppLayout>
        </>
    );
};
