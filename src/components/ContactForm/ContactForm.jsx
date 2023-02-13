// import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';

import { selectedContacts } from 'redux/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { addContactThunk } from 'redux/contacts/contactsThunk';

export const ContactForm = () => {
    /////////////// REDUX //////////////
    const contactsStore = useSelector(selectedContacts);
    const dispatch = useDispatch();

    const addContact = obj => {
        contactsStore.find(
            ({ name }) => name.toLowerCase() === obj.name.toLowerCase()
        )
            ? alert(`${obj.name} is already in contacts`)
            : dispatch(addContactThunk(obj));
    };

    /////////////// LOCAL STATE //////////////

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'phone':
                setPhone(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        addContact({ name, phone });

        if (
            contactsStore.find(
                contact => contact.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            return;
        }

        resetForm();
    };

    const resetForm = () => {
        setName('');
        setPhone('');
    };

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <FormLabel>
                Name
                <FormInput
                    name="name"
                    value={name}
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
                    name="phone"
                    value={phone}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                    placeholder="000-00-00"
                />
            </FormLabel>
            <FormButton type="submit">Add contact</FormButton>
        </Form>
    );
};
