import 'react-toastify/dist/ReactToastify.css';
import { createSlice } from '@reduxjs/toolkit';
import {
    getContactsThunk,
    addContactThunk,
    deleteContactThunk,
    updateContactThunk,
} from './contacts-thunk';

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
            .addCase(getContactsThunk.pending, handlePending)
            .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = payload;
            })
            .addCase(getContactsThunk.rejected, handleRejected)
            ////////////////////////////////////////
            .addCase(addContactThunk.pending, handlePending)
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items.push(payload);
            })
            .addCase(addContactThunk.rejected, handleRejected)
            /////////////////////////////////////////////
            .addCase(deleteContactThunk.pending, handlePending)
            .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = state.contacts.items.filter(
                    contact => contact.id !== payload.id
                );
            })
            .addCase(deleteContactThunk.rejected, handleRejected)
            //////////////////////////////////
            .addCase(updateContactThunk.pending, handlePending)
            .addCase(updateContactThunk.fulfilled, (state, { payload }) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;

                state.contacts.items = state.contacts.items.map(item => {
                    if (item.id === payload.id) {
                        return payload;
                    } else {
                        return item;
                    }
                });
            })
            .addCase(updateContactThunk.rejected, handleRejected);
    },
});

export const { filteredContact } = contactsSlice.actions;

export default contactsSlice.reducer;
