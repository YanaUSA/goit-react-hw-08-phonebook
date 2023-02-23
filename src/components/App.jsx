import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from '../theme/GlobalStyle';
import Theme from '../theme/Theme';

import { refreshThunk } from 'redux/auth/auth-thunk';
import { useAuth } from 'hooks/useAuth';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

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
        !isRefreshing && (
            <>
                <Theme>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />} />
                            <Route
                                path="register"
                                element={
                                    <RestrictedRoute
                                        component={RegisterPage}
                                        redirectTo="/contacts"
                                    />
                                }
                            />
                            <Route
                                path="login"
                                element={
                                    <RestrictedRoute
                                        component={LoginPage}
                                        redirectTo="/contacts"
                                    />
                                }
                            />
                            <Route
                                path="contacts"
                                element={
                                    <PrivateRoute
                                        component={ContactsPage}
                                        redirectTo="/login"
                                    />
                                }
                            />
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </Theme>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    theme="light"
                />
            </>
        )
    );
};
