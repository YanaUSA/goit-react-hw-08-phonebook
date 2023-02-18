import { AuthNavContainer, AuthNavigationLink } from './AuthNavigation.styled';

const AuthNavigation = () => {
    return (
        <AuthNavContainer>
            <AuthNavigationLink to="/register">Sign up</AuthNavigationLink>
            <AuthNavigationLink to="/login">Log in</AuthNavigationLink>
        </AuthNavContainer>
    );
};
export default AuthNavigation;
