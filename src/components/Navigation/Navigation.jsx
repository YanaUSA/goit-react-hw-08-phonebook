import { useAuth } from 'hooks/useAuth';
import { Nav, NavigationLink } from './Navigation.styled';

const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <Nav>
            <NavigationLink to="/">Home</NavigationLink>

            {isLoggedIn && (
                <NavigationLink to="/contacts">My contacts</NavigationLink>
            )}
        </Nav>
    );
};

export default Navigation;
