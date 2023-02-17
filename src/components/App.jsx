import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getContactsThunk } from 'redux/contacts/contacts-thunk';
import {
    selectedIsLoading,
    selectedError,
} from 'redux/contacts/contacts-selectors';
import AppLayout from './AppLayout/AppLayout';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/homePage/homePage'));
const LoginPage = lazy(() => import('../pages/loginPage/loginPage'));
const ContactsPage = lazy(() => import('../pages/contactsPage/contactsPage'));

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
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/register" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/contacts" element={<ContactsPage />} />
                    </Routes>
                </Suspense>
            </AppLayout>
        </>
    );
};
