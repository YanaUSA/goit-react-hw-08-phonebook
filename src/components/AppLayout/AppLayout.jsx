import { Suspense } from 'react';
import { Header, Main } from './AppLayout.styled';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import UserMenu from '../UserMenu';

const AppLayout = ({ children }) => {
    return (
        <>
            <Header>
                <Navigation />
                <AuthNavigation />
                <UserMenu />
            </Header>
            <Suspense fallback={<div>Loading...</div>}>
                <Main>{children}</Main>
            </Suspense>
        </>
    );
};

export default AppLayout;
