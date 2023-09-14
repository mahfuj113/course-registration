import { useEffect } from "react";
import { useState } from "react";
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';

const Cards = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="bg-[#F3F3F3] flex gap-6 justify-center">
            <div className="grid grid-cols-3 gap-6">
                {
                    courses.map(course => (
                        <div key={course.id} className="w-[312px] h-[402px] bg-[#FFF] rounded-xl">
                            <div className="flex justify-center mt-4">
                                <img src={course.img} alt="" />
                            </div>
                            <div className="mx-4 mt-4 mb-3">
                                <h1 className="text-lg font-semibold">{course.course_name}</h1>
                                <p className="text-sm font-normal leading-6 text-[#1C1B1B99] mb-4">{course.details}</p>
                                <div className="flex gap-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <span><FaDollarSign></FaDollarSign></span> <span className="text-base font-medium text-[#1C1B1B99]">Price: {course.price}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span><FaBookOpen></FaBookOpen></span>
                                        <span className="text-base font-medium text-[#1C1B1B99]">Credit: {course.credit}hr</span>
                                    </div>
                                </div>
                                <div className="py-2 bg-[#2F80ED] rounded-lg text-center">
                                    <button className="text-lg font-semibold text-[#FFF] ">Select</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-[312px]">
            </div>
        </div>
    );
};

export default Cards;