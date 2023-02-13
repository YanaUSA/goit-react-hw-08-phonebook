import { createSlice } from '@reduxjs/toolkit';
import {
    getContactsThunk,
    addContactThunk,
    deleteContactThunk,
} from './contactsThunk';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

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
            .addCase(getContactsThunk.pending, state => {
                handlePending(state);
            })
            .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = payload;
            })
            .addCase(getContactsThunk.rejected, (state, { payload }) => {
                handleRejected(state, { payload });
            })
            .addCase(addContactThunk.pending, state => {
                handlePending(state);
            })
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items.push(payload);
            })
            .addCase(addContactThunk.rejected, (state, { payload }) => {
                handleRejected(state, { payload });
            })
            .addCase(deleteContactThunk.pending, state => {
                handlePending(state);
            })
            .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = state.contacts.items.filter(
                    contact => contact.id !== payload.id
                );
            })
            .addCase(deleteContactThunk.rejected, (state, { payload }) => {
                handleRejected(state, { payload });
            });
    },
});

export const { filteredContact } = contactsSlice.actions;

export default contactsSlice.reducer;
