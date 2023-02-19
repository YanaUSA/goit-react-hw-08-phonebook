import { createSlice } from '@reduxjs/toolkit';
import {
    registerThunk,
    loginThunk,
    logoutThunk,
    refreshThunk,
} from './auth-thunk';

// const handlePending = state => {
//     state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };

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
            .addCase(registerThunk.pending, (state, action) => state)
            .addCase(registerThunk.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(registerThunk.rejected, (state, action) => state)
            ///////////////////////////////////////////
            .addCase(loginThunk.pending, (state, action) => state)
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(loginThunk.rejected, (state, action) => state)
            ///////////////////////////////////////////////
            .addCase(logoutThunk.pending, (state, action) => state)
            .addCase(logoutThunk.fulfilled, state => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logoutThunk.rejected, (state, action) => state);
        //////////////////////////////////////////////

        // .addCase( , (state, action)=>{})
    },
});

export default authSlice.reducer;
