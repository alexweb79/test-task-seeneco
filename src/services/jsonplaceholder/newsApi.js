import {apiNews} from './api';

class NewsAPI {
    static fetchNews = async () => {
        return await apiNews.get('/posts?_limit=10');
    };
}

export default NewsAPI;
