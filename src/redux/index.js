import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './auth/authSlice';
import {newsReducer} from './news/newsSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        news: newsReducer
    },
});

export default store;
