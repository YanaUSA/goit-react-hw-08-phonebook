import defaultAvatar from './user-default-image.jpg';
import {
    UserMenuContainer,
    UserMenuImage,
    UserWelcomeText,
    LogoutBtn,
} from './UserMenu.styled';

const UserMenu = () => {
    const avatar = defaultAvatar;
    return (
        <UserMenuContainer>
            <UserMenuImage src={avatar} alt="User avatar" width="32" />
            <UserWelcomeText>Welcome, Mango</UserWelcomeText>
            {/* <span>mango@mail.com</span> */}
            <LogoutBtn type="button">Logout</LogoutBtn>
        </UserMenuContainer>
    );
};

export default UserMenu;
