import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { deleteContactThunk } from 'redux/contacts/contacts-thunk';

export const DeleteCheckPopup = ({ id, onClose }) => {
    const dispatch = useDispatch();

    const deleteContact = id => {
        dispatch(deleteContactThunk(id));
        onClose();
    };

    return (
        <>
            <p style={{ color: 'black' }}>
                Are you sure you want to delete the contact?
            </p>
            <ul>
                <li>
                    <Button
                        type="button"
                        text="OK"
                        clickHandler={() => deleteContact(id)}
                    />
                </li>
                <li>
                    <Button
                        type="button"
                        text="Cancel"
                        clickHandler={onClose}
                    />
                </li>
            </ul>
        </>
    );
};
