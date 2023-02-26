import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contacts-thunk';
import {
    DeleteCheckText,
    DeleteCheckBtnList,
    DeleteCheckButton,
} from './DeleteCheckPopup.styled';

export const DeleteCheckPopup = ({ id, onClose }) => {
    const dispatch = useDispatch();

    const deleteContact = id => {
        dispatch(deleteContactThunk(id));
        onClose();
    };

    return (
        <>
            <DeleteCheckText>
                Are you sure you want to delete the contact?
            </DeleteCheckText>
            <DeleteCheckBtnList>
                <li>
                    <DeleteCheckButton
                        type="button"
                        text="OK"
                        onClick={() => deleteContact(id)}
                    >
                        OK
                    </DeleteCheckButton>
                </li>
                <li>
                    <DeleteCheckButton
                        type="button"
                        text="Cancel"
                        onClick={onClose}
                    >
                        Cancel
                    </DeleteCheckButton>
                </li>
            </DeleteCheckBtnList>
        </>
    );
};
