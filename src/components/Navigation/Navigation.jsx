import { Nav, NavigationLink } from './Navigation.styled';

const Navigation = () => (
    <Nav>
        <NavigationLink exact="true" to="/">
            Home
        </NavigationLink>

        <NavigationLink exact="true" to="/contacts">
            My contacts
        </NavigationLink>
    </Nav>
);

export default Navigation;
