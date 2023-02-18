import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const authFetchAPI = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

const setTokenToHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearTokenToHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

console.log('axios', setTokenToHeader);

export const userSignupThunk = createAsyncThunk(
    'user/signup',
    async (_, thunkAPI) => {
        try {
            const response = await authFetchAPI.post('/users/signup');
            console.log('response signup', response);

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
