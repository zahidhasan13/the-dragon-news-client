import moment from 'moment';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const EditorInsight = ({news}) => {
    const {_id, title, author, thumbnail_url} = news;
    return (
        <div>
            <img src={thumbnail_url} alt="" className='w-full h-48'/>
            <Link to={`/news/${_id}`}><h2 className='text-xl font-bold my-4 text-gray-600'>{title}</h2></Link>
            <p className='flex items-center text-gray-400'><FaCalendarAlt/><span className='ml-2'>{moment(author.publish_date).format("MMM D, YYYY")}</span></p>
        </div>
    );
};

export default EditorInsight;