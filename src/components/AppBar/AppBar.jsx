import { Header, HeaderContainer } from './AppBar.styled';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import UserMenu from '../UserMenu';
import { useAuth } from 'hooks/useAuth';

const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <Header>
                <HeaderContainer>
                    <Navigation />
                    {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
                </HeaderContainer>
            </Header>
        </>
    );
};

export default AppBar;
