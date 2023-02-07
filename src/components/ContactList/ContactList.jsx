import { useSelector } from 'react-redux';
import { contactsData } from '../../redux/selectors/selectors';

import { UserList } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = () => {
    const contactsStore = useSelector(contactsData);

    return (
        <UserList>
            {contactsStore.map(({ id, name, number }) => (
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
