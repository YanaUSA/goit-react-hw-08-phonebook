import { createAsyncThunk } from '@reduxjs/toolkit';
import { PublicFetchAPI, PrivateFetchAPI, token } from 'http-api/http-api';

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await PublicFetchAPI.post(
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
            const response = await PublicFetchAPI.post(
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
            const response = await PrivateFetchAPI.post('/users/logout');
            token.clear();

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const refreshThunk = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const stateToken = thunkAPI.getState().auth.token;

        if (!stateToken) {
            return thunkAPI.rejectWithValue('No valid token');
        }

        token.set(stateToken);

        try {
            const response = await PrivateFetchAPI.get('/users/current');

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
