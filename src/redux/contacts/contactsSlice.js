import { createSlice } from '@reduxjs/toolkit';
import {
    getContactsThunk,
    addContactThunk,
    deleteContactThunk,
} from './contactsThunk';

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
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = action.payload;
            })
            .addCase(getContactsThunk.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            })
            .addCase(addContactThunk.pending, (state, action) => {
                state.contacts.isLoading = true;
            })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items.push(action.payload);
            })
            .addCase(addContactThunk.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            })
            .addCase(deleteContactThunk.pending, (state, action) => {
                state.contacts.isLoading = true;
            })
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = state.contacts.items.filter(
                    contact => contact.id !== action.payload.id
                );
            })
            .addCase(deleteContactThunk.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            });
    },
});

export const { filteredContact } = contactsSlice.actions;

export default contactsSlice.reducer;
