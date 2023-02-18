import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchAPI = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

export const getContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await fetchAPI.get('/contacts');

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
            const response = await fetchAPI.post('/contacts', newContact);

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
            const response = await fetchAPI.delete(`/contacts/${contactId}`);

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
