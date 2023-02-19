import { useSelector } from 'react-redux';
import {
    selectedContacts,
    selectedFilter,
} from 'redux/contacts/contacts-selectors';

import { UserList } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = () => {
    const contactsStore = useSelector(selectedContacts);
    const filterByName = useSelector(selectedFilter);

    const namesFiltered = contactsStore.filter(({ name }) =>
        name.toLowerCase().includes(filterByName)
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
