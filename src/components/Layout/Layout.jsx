import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import { LayoutStyle } from './Layout.styled';

export const Layout = () => {
    return (
        <LayoutStyle>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </LayoutStyle>
    );
};
