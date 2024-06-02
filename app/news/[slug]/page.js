import React from 'react';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

const NewsDetailPage = ({params}) => {
    const {slug} = params;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === decodeURI(slug))
    if(newsItem){
        return (
            <article className='news-article'>
                <header>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                    <h1>{newsItem.title}</h1>
                    <time dateTime={newsItem.date}>{newsItem.date}</time>
                </header>
                <p>{newsItem.content}</p>
            </article>
        );
    }
    return notFound();
    
}

export default NewsDetailPage;
