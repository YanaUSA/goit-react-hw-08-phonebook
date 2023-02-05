import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';

export const ContactForm = ({ contacts, addContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        addContact({ name, number });

        if (
            contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            return;
        }

        resetForm();
    };

    const resetForm = () => {
        setName('');
        setNumber('');
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
                />
            </FormLabel>
            <FormLabel>
                Number
                <FormInput
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                />
            </FormLabel>
            <FormButton type="submit">Add contact</FormButton>
        </Form>
    );
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};
