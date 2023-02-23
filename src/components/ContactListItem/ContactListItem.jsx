import PropTypes from 'prop-types';
import {
    ItemWrapper,
    UserContact,
    // UserDeleteBtn,
    IconWraper,
    EditIcon,
    DeleteIcon,
    NameWrapper,
} from './ContactListItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contacts-thunk';

export const ContactListItem = ({ userId, userName, tel }) => {
    const dispatch = useDispatch();

    return (
        <ItemWrapper>
            <NameWrapper>
                <UserContact>
                    {userName + ':  '}
                    {tel}
                </UserContact>
            </NameWrapper>
            <IconWraper>
                <div>
                    <EditIcon />
                </div>

                <div onClick={() => dispatch(deleteContactThunk(userId))}>
                    <DeleteIcon />
                </div>
            </IconWraper>

            {/* <UserDeleteBtn onClick={() => dispatch(deleteContactThunk(userId))}>
                Delete
            </UserDeleteBtn> */}
        </ItemWrapper>
    );
};

ContactListItem.propTypes = {
    userId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
};
