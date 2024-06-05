import { notFound } from 'next/navigation';
import React from 'react';
import ModalBackdrop from '@/components/modal-backdrop';
import { getNewsItem } from '@/lib/news';

const ImageInterceptedPage = async ({params}) => {
    const {slug} = params;
    const newsItem = await getNewsItem(slug);
    if(!newsItem){
        notFound();
    }

    return (
            <>  
                <ModalBackdrop />
                <dialog className='modal' open>
                    <div className='fullscreen-image'>
                        <img  src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                    </div>
                </dialog>
                
            </>
    
    );
}

export default ImageInterceptedPage;