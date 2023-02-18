import { Header } from './AppBar.styled';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import UserMenu from '../UserMenu';

const AppBar = () => {
    return (
        <>
            <Header>
                <Navigation />
                <AuthNavigation />
                <UserMenu />
            </Header>
        </>
    );
};

export default AppBar;
