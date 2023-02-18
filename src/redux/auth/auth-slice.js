import { createSlice } from '@reduxjs/toolkit';
import { userSignupThunk } from './auth-thunk';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => {
        builder.addCase(userSignupThunk, (state, action) => {});
    },
});

export default authSlice.reducer;
