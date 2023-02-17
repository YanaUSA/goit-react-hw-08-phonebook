import { Header, Main } from './AppLayout.styled';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

const AppLayout = ({ children }) => {
    return (
        <>
            <Header>
                <Navigation />
                <AuthNavigation />
            </Header>
            <Main>{children}</Main>
        </>
    );
};

export default AppLayout;
