import { createSlice } from '@reduxjs/toolkit';
import {
    registerThunk,
    loginThunk,
    logoutThunk,
    refreshThunk,
} from './auth-thunk';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleRejected = (_, action) => {
    toast.error(action.payload);
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => {
        builder
            .addCase(registerThunk.pending, state => state)
            .addCase(registerThunk.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(registerThunk.rejected, handleRejected)
            ///////////////////////////////////////////
            .addCase(loginThunk.pending, (state, action) => state)
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(loginThunk.rejected, handleRejected)
            ///////////////////////////////////////////////
            .addCase(logoutThunk.pending, state => state)
            .addCase(logoutThunk.fulfilled, state => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logoutThunk.rejected, handleRejected)
            //////////////////////////////////////////////
            .addCase(refreshThunk.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshThunk.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshThunk.rejected, state => {
                state.isRefreshing = false;
            });
    },
});

export default authSlice.reducer;
