import {createAsyncThunk} from '@reduxjs/toolkit';
import NewsAPI from '../../services/jsonplaceholder/newsApi';

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (_, {rejectWithValue}) => {
        try {
            const response = await NewsAPI.fetchNews()

            if (response.status !== 200) {
                throw new Error(`Error fetching news`)
            }

            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
