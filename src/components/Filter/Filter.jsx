import PropTypes from 'prop-types';
import { useState } from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ addFilterValue }) => {
    const [filter, setFilter] = useState('');

    const filterContact = e => {
        setFilter(e.target.value);

        const normalizedFilterValue = e.target.value.toLowerCase().trim();
        addFilterValue(normalizedFilterValue);
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
                onChange={filterContact}
            />
        </FilterLabel>
    );
};

Filter.propTypes = {
    addFilterValue: PropTypes.func.isRequired,
    // onChange: PropTypes.func.isRequired,
};
