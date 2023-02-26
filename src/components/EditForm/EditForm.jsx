import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateContactThunk } from 'redux/contacts/contacts-thunk';
import { useContacts } from 'hooks/useContacts';

import {
    Form,
    FormLabel,
    FormInput,
    FormButton,
} from '../ContactForm/ContactForm.styled';

export const EditForm = ({ id, onClose }) => {
    const dispatch = useDispatch();
    const { contacts } = useContacts();

    const { name, number } = contacts.find(el => el.id === id);

    const [editName, setEditName] = useState(name);
    const [editNumber, setEditNumber] = useState(number);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setEditName(value);
                break;

            case 'number':
                setEditNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        dispatch(
            updateContactThunk({ id, name: editName, number: editNumber })
        );

        onClose();
    };

    return (
        <>
            {' '}
            <Form onSubmit={handleSubmit} autoComplete="off">
                <FormLabel>
                    Name
                    <FormInput
                        name="name"
                        value={editName}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                        placeholder="Enter name"
                    />
                </FormLabel>
                <FormLabel>
                    Number
                    <FormInput
                        type="tel"
                        name="number"
                        value={editNumber}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                        placeholder="000-00-00"
                    />
                </FormLabel>
                <FormButton type="submit" text="Edit">
                    Edit
                </FormButton>
                <FormButton type="button" text="Cancel" onClick={onClose}>
                    Cancel
                </FormButton>
            </Form>
        </>
    );
};

EditForm.propTypes = {
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};
