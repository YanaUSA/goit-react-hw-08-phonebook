import PropTypes from 'prop-types';
import { useState } from 'react';
import {
    ItemWrapperLi,
    UserContact,
    // UserDeleteBtn,
    IconWrapper,
    EditIcon,
    DeleteIcon,
    NameWrapper,
} from './ContactListItem.styled';
import { Modal } from 'components/Modal/Modal';
import { DeleteCheckPopup } from '../DeleteCheckPopup/DeleteCheckPopup';
import { ButtonCommonStyles } from '../Button/Button.styled';
import { useEffect } from 'react';
import { EditForm } from '../EditForm/EditForm';

export const ContactListItem = ({ userId, userName, tel }) => {
    const [contactId, setContactId] = useState('');
    const [btnName, setBtnName] = useState('');

    useEffect(() => {
        if (contactId) {
            document.body.style.overflow = 'hidden';
        }
    }, [contactId]);

    const closeModal = () => {
        setContactId('');
        setBtnName('');
        document.body.style.overflow = 'unset';
    };

    const clickBtnHandler = ({ currentTarget: { name } }) => {
        setBtnName(name);
        setContactId(userId);
    };

    return (
        <>
            <ItemWrapperLi>
                <NameWrapper>
                    <UserContact>
                        {userName + ':  '}
                        {tel}
                    </UserContact>
                </NameWrapper>
                <IconWrapper>
                    <ButtonCommonStyles
                        type="button"
                        name="edit"
                        onClick={clickBtnHandler}
                    >
                        <EditIcon />
                    </ButtonCommonStyles>

                    <ButtonCommonStyles
                        type="button"
                        name="delete"
                        onClick={clickBtnHandler}
                    >
                        <DeleteIcon />
                    </ButtonCommonStyles>
                </IconWrapper>

                {/* <UserDeleteBtn onClick={() => dispatch(deleteContactThunk(userId))}>
                Delete
            </UserDeleteBtn> */}
            </ItemWrapperLi>
            {contactId && btnName === 'edit' && (
                <Modal onClose={closeModal}>
                    <EditForm id={contactId} onClose={closeModal} />
                </Modal>
            )}
            {contactId && btnName === 'delete' && (
                <Modal onClose={closeModal}>
                    <DeleteCheckPopup id={contactId} onClose={closeModal} />
                </Modal>
            )}
        </>
    );
};

ContactListItem.propTypes = {
    userId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
};
