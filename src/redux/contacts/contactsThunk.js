import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63e631f5c8839ccc28533b27.mockapi.io';

export const getContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');

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
            const response = await axios.post('/contacts', newContact);

            console.log('response mockAPI', response.data);

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
            const response = await axios.delete(`/contacts/${contactId}`);

            console.log('contactId', contactId);

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
