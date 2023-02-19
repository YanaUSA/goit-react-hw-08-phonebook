import { Header } from './AppBar.styled';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import UserMenu from '../UserMenu';
import { useAuth } from 'hooks/useAuth';

const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <Header>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
            </Header>
        </>
    );
};

export default AppBar;
