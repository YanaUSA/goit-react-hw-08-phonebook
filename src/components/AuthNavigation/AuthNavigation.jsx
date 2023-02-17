import { AuthNavContainer, AuthNavigationLink } from './AuthNavigation.styled';

const AuthNavigation = () => {
    return (
        <AuthNavContainer>
            <AuthNavigationLink exact="true" to="/register">
                Sign in
            </AuthNavigationLink>
            <AuthNavigationLink exact="true" to="/login">
                Log in
            </AuthNavigationLink>
        </AuthNavContainer>
    );
};
export default AuthNavigation;
