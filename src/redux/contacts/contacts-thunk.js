import { createAsyncThunk } from '@reduxjs/toolkit';
import { PrivateFetchAPI } from 'http-api/http-api';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await PrivateFetchAPI.get('/contacts');

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            const response = await PrivateFetchAPI.post(
                '/contacts',
                newContact
            );

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await PrivateFetchAPI.delete(
                `/contacts/${contactId}`
            );

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
