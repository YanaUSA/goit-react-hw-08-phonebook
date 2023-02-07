// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
    // addedContact,
    deletedContact,
    filteredContact,
} from '../redux/contacts/contactsSlice';
import { contactsData, filteredData } from '../redux/selectors/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, ContactsTitle } from './App.styled';

export const App = () => {
    const contactsStore = useSelector(contactsData);
    const filterByName = useSelector(filteredData);
    const dispatch = useDispatch();

    // const addContact = obj => {
    //     const newContact = {
    //         id: nanoid(),
    //         ...obj,
    //     };

    //     contactsStore.find(
    //         ({ name }) => name.toLowerCase() === obj.name.toLowerCase()
    //     )
    //         ? alert(`${obj.name} is already in contacts`)
    //         : dispatch(addedContact(newContact));
    // };

    const deleteContact = id => {
        dispatch(deletedContact(id));
    };

    // const filteredName = filterValue => {
    //     dispatch(filteredContact(filterValue));
    // };

    const getFilteredContact = () => {
        const nameFiltered = contactsStore.filter(({ name }) =>
            name.toLowerCase().includes(filterByName)
        );
        return nameFiltered;
    };

    return (
        <Container>
            <Title>Phonebook</Title>
            {/* <ContactForm addContact={addContact} contacts={contactsStore} /> */}

            <ContactForm />
            <ContactsTitle>Contacts</ContactsTitle>
            {/* <Filter addFilterValue={filteredName} /> */}

            <Filter />
            <ContactList
                contacts={getFilteredContact()}
                deleteContact={deleteContact}
            />
        </Container>
    );
};
