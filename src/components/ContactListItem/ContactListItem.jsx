import PropTypes from 'prop-types';
import {
    ItemWrapper,
    UserContact,
    UserDeleteBtn,
} from './ContactListItem.styled';

// import { useDispatch, useSelector } from 'react-redux';
// import {
//     // addedContact,
//     deletedContact,
//     filteredContact,
// } from '../redux/contacts/contactsSlice';
// import { contactsData } from '../redux/selectors/selectors';

export const ContactListItem = ({ userName, tel, userId, deleteContact }) => {
    // const contactsStore = useSelector(contactsData);
    // const dispatch = useDispatch();

    // const deleteContact = id => {
    //     dispatch(deletedContact(id));
    // };

    return (
        <ItemWrapper>
            <UserContact>
                {userName + ': '}
                {tel}
            </UserContact>
            <UserDeleteBtn onClick={() => deleteContact(userId)}>
                Delete
            </UserDeleteBtn>
        </ItemWrapper>
    );
};

ContactListItem.propTypes = {
    userName: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};
