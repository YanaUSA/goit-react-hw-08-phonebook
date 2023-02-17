import { useState } from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { filteredContact } from 'redux/contacts/contacts-slice';

export const Filter = () => {
    const [filter, setFilter] = useState('');
    const dispatch = useDispatch();

    const handleFilterContact = e => {
        setFilter(e.target.value);

        const normalizedFilterValue = e.target.value.toLowerCase().trim();

        dispatch(filteredContact(normalizedFilterValue));
    };

    return (
        <FilterLabel>
            Find contacts by name
            <FilterInput
                type="text"
                name="name"
                value={filter}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleFilterContact}
                placeholder="Enter name for search"
            />
        </FilterLabel>
    );
};
