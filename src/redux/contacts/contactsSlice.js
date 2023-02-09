import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
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
            state.filter = payload;
        },
    },
});

export const { addedContact, deletedContact, filteredContact } =
    contactsSlice.actions;

export default contactsSlice.reducer;
