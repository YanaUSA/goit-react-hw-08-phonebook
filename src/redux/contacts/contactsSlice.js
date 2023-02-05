import { createSlice } from '@reduxjs/toolkit';

const contactsList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: contactsList,
        filter: '',
    },
    reducers: {
        addedContact: (state, { payload }) => {
            state.contacts.push(payload);
        },
        deletedContact: (state, { payload }) => {
            state.contacts = state.contacts.filter(
                contact => contact.id !== payload
            );
        },
        filteredContact: (state, { payload }) => {
            console.log('payload', payload);
            state.filter = payload;
        },
    },
});

export const { addedContact, deletedContact, filteredContact } =
    contactsSlice.actions;

export default contactsSlice.reducer;
