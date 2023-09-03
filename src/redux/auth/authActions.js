import {createAsyncThunk} from '@reduxjs/toolkit';
import AuthAPI from '../../services/authApi';

export const login = createAsyncThunk(
    'auth/login',
    async ({username, password}, {rejectWithValue}) => {
        try {
            const {isAuthenticated, error} = await AuthAPI.login({username, password});

            if (isAuthenticated) {
                localStorage.setItem('isAuthenticated', 'true');
            } else {
                throw new Error(error)
            }

            return isAuthenticated;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);
