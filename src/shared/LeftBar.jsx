import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendar } from 'react-icons/fa';
import sp1 from '../assets/1.png'
import sp2 from '../assets/2.png'
import sp3 from '../assets/3.png'

const LeftBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
          .then((res) => res.json())
          .then((data) => {setCategories(data)});
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-xl font-bold mb-4">All Categories</h3>
                <div>
                    {
                        categories.map((category) => {
                            return (
                                <div key={category.id}>
                                    <Link className="text-xl font-bold text-gray-400 py-2 pl-4 inline-block">{category.name}</Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <div>
                        <img src={sp1} alt="" className="w-full"/>
                        <h2 className="text-2xl font-bold text-gray-600 my-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex justify-between items-center">
                            <p className="text-xl text-gray-700 font-medium">Sports</p>
                            <p className="flex items-center text-gray-400 font-medium text-xl"><FaCalendar/><span className="ml-2">Jan 4, 2022</span></p>
                        </div>
                    </div>
                    <div className="my-4">
                        <img src={sp2} alt="" className="w-full"/>
                        <h2 className="text-2xl font-bold text-gray-600 my-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex justify-between items-center">
                            <p className="text-xl text-gray-700 font-medium">Sports</p>
                            <p className="flex items-center text-gray-400 font-medium text-xl"><FaCalendar/><span className="ml-2">Jan 4, 2022</span></p>
                        </div>
                    </div>
                    <div>
                        <img src={sp3} alt="" className="w-full"/>
                        <h2 className="text-2xl font-bold text-gray-600 my-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex justify-between items-center">
                            <p className="text-xl text-gray-700 font-medium">Sports</p>
                            <p className="flex items-center text-gray-400 font-medium text-xl"><FaCalendar/><span className="ml-2">Jan 4, 2022</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;