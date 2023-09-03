import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchNews} from '../redux/news/newsActions';
import News from '../components/news/News';
import Title from '../components/Title';
import Loader from '../components/Loader';

const NewsPage = () => {
    const {news} = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!news?.length) {
            dispatch(fetchNews())
        }
    }, [news, dispatch]);

    return (
        <>
            <Title title="News Page"/>
            {news?.length ? <News news={news}/> : <Loader />}
        </>
    );
};

export default NewsPage;
