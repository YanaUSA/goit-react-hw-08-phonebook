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
            <Main>{children}</Main>
        </>
    );
};

export default AppLayout;
