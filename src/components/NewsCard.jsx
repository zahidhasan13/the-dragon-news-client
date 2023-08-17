import moment from "moment";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { HiBookmark, HiBookmarkAlt, HiEye, HiOutlineShare, HiOutlineStar, HiStar } from "react-icons/hi";
import { HiOutlineBookmark } from "react-icons/hi2";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const [bookmark, setBookmark] = useState(false);
  const { _id, author, title, image_url, details, rating, total_view } = news;

  const handleBookmark = () => {
    if (!bookmark) {
      setBookmark(true);
      toast.success("Bookmarked successfully");
    }
  };

  
  return (
    <div className="border-2 border-gray-300 rounded mb-4">
      <div className="flex items-center bg-gray-200 p-4">
        <div className="flex items-center flex-grow">
          <img
            src={author.img}
            alt="author Image"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4">
            <h4 className="text-lg font-bold text-gray-600">{author.name}</h4>
            <p className="text-gray-600 font-medium">
              {author.published_date &&
                moment(author.published_date).format("yyyy-mm-D")}
            </p>
          </div>
        </div>
        <div className="flex items-center text-xl">
          <button onClick={handleBookmark}>
            {
              bookmark ? (
                <HiBookmarkAlt className="text-red-600" />
              ) : (
                <HiOutlineBookmark className="text-gray-600" />
              )
            }
          </button>
          <Toaster/>
          <button>
            <HiOutlineShare />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-500">{title}</h1>
        <img src={image_url} alt="News Image" className="my-4" />
        <p className="text-lg font-medium text-gray-500">
          {details.slice(0, 250)}...
        </p>
        <Link to={`/news/${_id}`} className="text-orange-500 font-bold text-lg">Read More</Link>
      </div>
      <div className="p-4">
        <hr className="my-4" />
        <div className="flex">
          <div className="flex-grow text-lg text-yellow-500">
            <Rating
              placeholderRating={rating.number}
              emptySymbol={<HiOutlineStar />}
              placeholderSymbol={<HiStar />}
              fullSymbol={<HiStar />}
              readonly
            />{" "}
            <span className="text-gray-600 font-medium">{rating.number}</span>
          </div>
          <div className="flex items-center text-lg text-gray-600 font-medium">
            <HiEye />
            <p className="ml-2">{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
