// import PropTypes from 'prop-types';
import {
    ItemWrapper,
    UserContact,
    UserDeleteBtn,
} from './ContactListItem.styled';

import { useDispatch, useSelector } from 'react-redux';
import {
    deletedContact,
    // filteredContact,
} from '../../redux/contacts/contactsSlice';
import { contactsData } from '../../redux/selectors/selectors';

export const ContactListItem = () => {
    const contactsStore = useSelector(contactsData);
    const dispatch = useDispatch();

    const { id, name, number } = contactsStore;

    const deleteContact = id => {
        dispatch(deletedContact(id));
    };

    // const getFilteredContact = () => {
    //     const nameFiltered = contactsStore.filter(({ name }) =>
    //         name.toLowerCase().includes(filterByName)
    //     );
    //     return nameFiltered;
    // };

    return (
        <ItemWrapper>
            <UserContact>
                {name + ': '}
                {number}
            </UserContact>
            <UserDeleteBtn onClick={() => deleteContact(id)}>
                Delete
            </UserDeleteBtn>
        </ItemWrapper>
    );
};

// ContactListItem.propTypes = {
//     userName: PropTypes.string.isRequired,
//     tel: PropTypes.string.isRequired,
//     userId: PropTypes.string.isRequired,
//     deleteContact: PropTypes.func.isRequired,
// };
