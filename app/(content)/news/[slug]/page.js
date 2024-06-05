import React from 'react';
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const NewsDetailPage = ({params}) => {
    const {slug} = params;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === (slug))
    if(newsItem){
        return (
            <article className='news-article'>
                <header>
                    <Link href={`/news/${newsItem.slug}/image`}>
                        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                    </Link>
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