import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getContactsThunk } from 'redux/contacts/contacts-thunk';
import {
    selectedIsLoading,
    selectedError,
} from 'redux/contacts/contacts-selectors';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/homePage/homePage'));
const RegisterPage = lazy(() => import('../pages/registerPage/registerPage'));
const LoginPage = lazy(() => import('../pages/loginPage/loginPage'));
const ContactsPage = lazy(() => import('../pages/contactsPage/contactsPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

export const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectedIsLoading);
    const error = useSelector(selectedError);

    useEffect(() => {
        dispatch(getContactsThunk());
    }, [dispatch]);

    return (
        <>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/contacts" element={<ContactsPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};
