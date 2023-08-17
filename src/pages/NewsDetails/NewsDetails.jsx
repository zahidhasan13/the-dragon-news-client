import React, { useContext } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsight from '../../components/EditorInsight';
import { AuthContext } from '../../context/AuthProvider';
import RightBar from '../../shared/RightBar';

const NewsDetails = () => {
    const newsDetails = useLoaderData();
    const {allNews} = useContext(AuthContext);
    const { title, image_url, details, category_id } = newsDetails;


    const relatedNews = allNews.filter(related => related.category_id === category_id)
    console.log(relatedNews);

    return (
            <div className='max-w-screen-xl mx-auto mt-4 lg:grid lg:grid-cols-4 lg:gap-4 flex flex-col'>
            <div className='col-span-3'>
            <h3 className='text-xl font-bold'>Dragon News</h3>
                <div className='border-2 border-gray-300 rounded p-4 my-4'>
                    <img src={image_url} alt="" className='w-full'/>
                    <h1 className='my-4 text-2xl text-gray-500 font-bold lg:mr-48 leading-10'>{title}</h1>
                    <p className='text-gray-500 font-medium'>{details}</p>
                    <Link to="/categories/0"><button className='flex items-center bg-pink-600 py-2 px-4 text-white font-semibold mt-6'><FaArrowLeftLong/><span className='ml-2'>All news in this category</span></button></Link>
                </div>
                <h3 className='text-xl font-bold'>Related News</h3>
                <div className='my-4 lg:grid lg:grid-cols-3 lg:gap-4 mx-8'>
                    {
                        relatedNews.slice(0, 3).map(news => <EditorInsight key={news._id}
                            news={news}
                        ></EditorInsight>)
                    }
                </div>
            </div>
            <div className='col-span-1'>
                <RightBar></RightBar>
            </div>
        </div>
    );
};

export default NewsDetails;