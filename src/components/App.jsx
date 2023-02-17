import { useEffect, lazy, Suspense } from 'react';
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
import HomePage from '../pages/homePage/homePage';
import ContactsPage from '../pages/contactsPage/contactsPage';

// const HomePage = lazy(() => import('path/to/HomePage'));

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
                <Routes>
                    <Route index path="/" element={<HomePage />} />
                    <Route index path="/register" element={<HomePage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                </Routes>
            </AppLayout>
        </>
    );
};
