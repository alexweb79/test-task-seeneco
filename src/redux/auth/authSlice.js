import {createSlice} from '@reduxjs/toolkit';
import {login} from './authActions';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
        status: null,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            localStorage.setItem('isAuthenticated', 'false');
            state.status = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.isAuthenticated = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
});

export const {logout} = authSlice.actions;

export const authReducer = authSlice.reducer;
