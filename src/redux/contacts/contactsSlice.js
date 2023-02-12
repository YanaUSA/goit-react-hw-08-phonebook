import { createSlice } from '@reduxjs/toolkit';
import { getContactsThunk } from './contactsThunk';

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену "contacts/fetchAll".
// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null,
        },
        filter: '',
    },
    reducers: {
        addedContact: (state, { payload }) => {
            state.contacts.items.push(payload);
        },
        deletedContact: (state, { payload }) => {
            state.contacts.items = state.contacts.items.filter(
                contact => contact.id !== payload
            );
        },
        filteredContact: (state, { payload }) => {
            state.filter = payload;
        },
    },

    extraReducers: builder => {
        builder
            .addCase(getContactsThunk.pending, (state, action) => {
                state.contacts.isLoading = true;
            })
            .addCase(getContactsThunk.fulfilled, (state, action) => {
                console.log('action in fulfilled', action);

                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = action.payload;
            })
            .addCase(getContactsThunk.rejected, (state, action) => {
                console.log('action in rejected', action);

                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            });
    },
});

export const { addedContact, deletedContact, filteredContact } =
    contactsSlice.actions;

export default contactsSlice.reducer;
