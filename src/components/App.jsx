// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { deletedContact } from '../redux/contacts/contactsSlice';
import { contactsData, filteredData } from '../redux/selectors/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, ContactsTitle } from './App.styled';

export const App = () => {
    const contactsStore = useSelector(contactsData);
    const filterByName = useSelector(filteredData);
    const dispatch = useDispatch();

    // const deleteContact = id => {
    //     dispatch(deletedContact(id));
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
            <ContactForm />
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            <ContactList
                contacts={getFilteredContact()}
                // deleteContact={deleteContact}
            />
        </Container>
    );
};
