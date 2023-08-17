import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../../components/NewsCard';

const CategoryNews = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h3 className='text-xl font-bold'>Dragon News Home</h3>
            <div className='my-4'>
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
            </div>
        </div>
    );
};

export default CategoryNews;