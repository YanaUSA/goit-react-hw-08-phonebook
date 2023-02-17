import { Nav, NavigationLink } from './Navigation.styled';

const Navigation = () => (
    <Nav>
        <NavigationLink exact to="/">
            Home
        </NavigationLink>

        <NavigationLink exact to="/contacts">
            My contacts
        </NavigationLink>
    </Nav>
);

export default Navigation;
