import { useSelector } from 'react-redux';
import {
    selectedUser,
    selectedIsLoggedIn,
    selectedIsRefreshing,
} from '../redux/auth/auth-selectors';

export const useAuth = () => {
    return {
        user: useSelector(selectedUser),
        isLoggedIn: useSelector(selectedIsLoggedIn),
        isRefreshing: useSelector(selectedIsRefreshing),
    };
};
