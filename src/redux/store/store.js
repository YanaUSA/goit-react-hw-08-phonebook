import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../contacts/contactsSlice';

export const store = configureStore({
    reducer: rootReducer,
    // {
    //     contacts: contactsReducer,
    //     filter: filterReducer,
    // },
    // preloadedState: initialState,
});

export default store;
