import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import Footer from 'components/Footer/Footer';
import { MainContainer } from './Layout.styled';

export const Layout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={null}>
                <MainContainer>
                    <Outlet />
                </MainContainer>
            </Suspense>
            <Footer />
        </div>
    );
};
