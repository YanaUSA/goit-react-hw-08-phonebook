import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const authFetchAPI = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
    set: token => {
        authFetchAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    clear: () => {
        authFetchAPI.defaults.headers.common.Authorization = null;
    },
};

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            console.log('credentials', credentials);

            const response = await authFetchAPI.post(
                '/users/signup',
                credentials
            );
            token.set(response.data.token);

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await authFetchAPI.post(
                '/users/login',
                credentials
            );
            token.set(response.data.token);

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            const response = await authFetchAPI.post('/users/logout');
            token.clear();

            console.log('response', response);
            console.log('token-response', response.data.token);

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
