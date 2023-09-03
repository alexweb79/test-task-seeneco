import React from 'react';
import NewsItem from './NewsItem';

const News = ({news}) => {
    return (
        <>
            {news.map(item => (
                <NewsItem
                    key={item.id}
                    title={item.title}
                    body={item.body}
                />
            ))}
        </>
    );
};

export default News;
