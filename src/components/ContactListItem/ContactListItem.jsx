import PropTypes from 'prop-types';
import {
    ItemWrapper,
    UserContact,
    UserDeleteBtn,
} from './ContactListItem.styled';

import { useDispatch } from 'react-redux';
import { deletedContact } from '../../redux/contacts/contactsSlice';

export const ContactListItem = ({ userId, userName, tel }) => {
    const dispatch = useDispatch();

    return (
        <ItemWrapper>
            <UserContact>
                {userName + ': '}
                {tel}
            </UserContact>
            <UserDeleteBtn onClick={() => dispatch(deletedContact(userId))}>
                Delete
            </UserDeleteBtn>
        </ItemWrapper>
    );
};

ContactListItem.propTypes = {
    userId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
};
