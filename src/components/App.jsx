import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { refreshThunk } from 'redux/auth/auth-thunk';
import { useAuth } from 'hooks/useAuth';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('../pages/homePage/homePage'));
const RegisterPage = lazy(() => import('../pages/registerPage/registerPage'));
const LoginPage = lazy(() => import('../pages/loginPage/loginPage'));
const ContactsPage = lazy(() => import('../pages/contactsPage/contactsPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

export const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshThunk());
    }, [dispatch]);

    return (
        <>
            <Suspense fallback={null}>
                {isRefreshing ? (
                    <Loader />
                ) : (
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />} />
                            <Route
                                path="/register"
                                element={<RegisterPage />}
                            />
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/contacts"
                                element={<ContactsPage />}
                            />
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                )}
            </Suspense>
        </>
    );
};
