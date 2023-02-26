import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    selectedIsLoading,
    selectedError,
} from 'redux/contacts/contacts-selectors';
import { getContactsThunk } from 'redux/contacts/contacts-thunk';
import {
    ContactsPageContainer,
    ContactsPageTitle,
    ContactsSectionTitle,
    ContactsFormContainer,
    ContactsListContainer,
} from './contactsPage.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectedIsLoading);
    const error = useSelector(selectedError);

    useEffect(() => {
        dispatch(getContactsThunk());
    }, [dispatch]);

    return (
        <ContactsPageContainer>
            <ContactsFormContainer>
                <ContactsPageTitle>Phonebook</ContactsPageTitle>
                <ContactForm />
            </ContactsFormContainer>
            <ContactsListContainer>
                <ContactsSectionTitle>My list</ContactsSectionTitle>
                <Filter />
                {isLoading && !error && <Loader />}
                <ContactList />
            </ContactsListContainer>
        </ContactsPageContainer>
    );
};

export default ContactsPage;
