import { useSelector } from 'react-redux';
import {
    selectedContacts,
    selectedIsLoading,
    selectedError,
    selectedFilter,
} from '../redux/contacts/contacts-selectors';

export const useContacts = () => {
    return {
        contacts: useSelector(selectedContacts),
        isLoading: useSelector(selectedIsLoading),
        error: useSelector(selectedError),
        filteredContact: useSelector(selectedFilter),
    };
};
