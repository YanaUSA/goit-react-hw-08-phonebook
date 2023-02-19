import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import defaultAvatar from './user-default-image.jpg';
import {
    UserMenuContainer,
    UserMenuImage,
    UserWelcomeText,
    LogoutBtn,
} from './UserMenu.styled';
import { logoutThunk } from 'redux/auth/auth-thunk';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const avatar = defaultAvatar;

    const handleLoguout = () => {
        dispatch(logoutThunk());
    };

    return (
        <UserMenuContainer>
            <UserMenuImage src={avatar} alt="User avatar" width="32" />
            <UserWelcomeText>Welcome, {user.name}</UserWelcomeText>
            {/* <span>mango@mail.com</span> */}
            <LogoutBtn type="button" onClick={handleLoguout}>
                Logout
            </LogoutBtn>
        </UserMenuContainer>
    );
};

export default UserMenu;
