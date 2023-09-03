import {createSlice} from '@reduxjs/toolkit';
import {fetchNews} from './newsActions';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.news = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    },
});

export const newsReducer = newsSlice.reducer;
