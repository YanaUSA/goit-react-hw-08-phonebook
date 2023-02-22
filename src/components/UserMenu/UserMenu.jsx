import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import defaultAvatar from './user-default-image.jpg';
import {
    UserMenuContainer,
    UserInfoBox,
    UserMenuImage,
    UserWelcomeText,
    UserEmail,
    LogoutBtn,
} from './UserMenu.styled';
import { logoutThunk } from 'redux/auth/auth-thunk';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const avatar = defaultAvatar;

    const handleLogout = () => {
        dispatch(logoutThunk());
    };

    return (
        <UserMenuContainer>
            <UserMenuImage src={avatar} alt="User avatar" width="32" />
            <UserInfoBox>
                <UserWelcomeText>Welcome, {user.name}</UserWelcomeText>
                <UserEmail>{user.email}</UserEmail>
            </UserInfoBox>
            <LogoutBtn type="button" onClick={handleLogout}>
                Logout
            </LogoutBtn>
        </UserMenuContainer>
    );
};

export default UserMenu;
