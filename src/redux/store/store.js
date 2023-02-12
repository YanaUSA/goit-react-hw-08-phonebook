import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../contacts/contactsSlice';

export const store = configureStore({
    reducer: rootReducer,
});
