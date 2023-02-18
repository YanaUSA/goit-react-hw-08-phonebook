import { Title, ContactsTitle } from '../../components/App.styled';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';

const ContactsPage = () => {
    return (
        <main>
            <Title>Phonebook</Title>
            <ContactForm />
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            <ContactList />
            {/* {isLoading && !error && <Loader />}
            <ContactList /> */}
        </main>
    );
};

export default ContactsPage;
