import { useSelector } from 'react-redux';
import { contactsData, filteredData } from '../../redux/selectors/selectors';

import { UserList } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = () => {
    const contactsStore = useSelector(contactsData);
    const filterByName = useSelector(filteredData);

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
