import { AuthNavContainer, AuthNavigationLink } from './AuthNavigation.styled';

const AuthNavigation = () => {
    return (
        <AuthNavContainer>
            <AuthNavigationLink exact to="/register">
                Sign in
            </AuthNavigationLink>
            <AuthNavigationLink exact to="/login">
                Log in
            </AuthNavigationLink>
        </AuthNavContainer>
    );
};
export default AuthNavigation;
