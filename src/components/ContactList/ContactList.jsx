import { UserList } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useContacts } from 'hooks/useContacts';

export const ContactList = () => {
    const { contacts, filteredContact } = useContacts();

    const namesFiltered = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filteredContact)
    );

    return (
        <UserList>
            {namesFiltered.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    userId={id}
                    userName={name}
                    tel={number}
                />
            ))}
        </UserList>
    );
};
