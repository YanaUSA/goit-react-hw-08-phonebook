import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteUsersThunk } from 'redux/users/users.thunk';
import { Button } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Modal = ({ id, closeModal }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteUser = id => {
        dispatch(deleteUsersThunk(id));
        closeModal();
        navigate('/contacts');
    };

    return (
        <ModalBackdrop>
            <ModalWindow>
                <p>Are you sure to Delete User?</p>
                <ul>
                    <li>
                        <Button text="OK" clickHandler={() => deleteUser(id)} />
                    </li>
                    <li>
                        <Button text="Cancel" clickHandler={closeModal} />
                    </li>
                </ul>
            </ModalWindow>
        </ModalBackdrop>
    );
};

Modal.propTypes = {
    id: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};
