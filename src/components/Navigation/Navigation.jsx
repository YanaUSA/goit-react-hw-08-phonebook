import { Nav, NavigationLink } from './Navigation.styled';

const Navigation = () => (
    <Nav>
        <NavigationLink to="/">Home</NavigationLink>

        <NavigationLink to="/contacts">My contacts</NavigationLink>
    </Nav>
);

export default Navigation;
