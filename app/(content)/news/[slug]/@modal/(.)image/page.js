"use client"
import { notFound, useRouter } from 'next/navigation';
import React from 'react';
import { DUMMY_NEWS } from '@/dummy-news';

const ImageInterceptedPage = ({params}) => {
    const router = useRouter();
    const {slug} = params;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === (slug))
    if(!newsItem){
        notFound();
    }

    return (
            <>  
            Intercepted
                <div className='modal-backdrop' onClick={router.back}/>
                <dialog className='modal' open>
                    <div className='fullscreen-image'>
                        <img  src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                    </div>
                </dialog>
                
            </>
    
    );
}

export default ImageInterceptedPage;