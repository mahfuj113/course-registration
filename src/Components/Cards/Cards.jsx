import { useEffect } from "react";
import { useState } from "react";
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
import Cart from "../Cart/Cart";

const Cards = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [creditRemaining, setCreditRemaininng] = useState(0);

    const budgetCredit = 20;

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const handleAddCourse = course => {
        const isExist = selectedCourse.find(item => item.id === course.id)
        let credit = course.credit
        if (isExist) {
            alert("Already booked try another")
        }
        else {

            setSelectedCourse([...selectedCourse, course]);
            selectedCourse.forEach(course => {
                credit += course.credit;
            });
        }
        const totalSum = budgetCredit - credit;
        if(totalSum < 0){
            return alert("No credit remaining")
        }
        else{
            setTotalCredit(credit);
            setCreditRemaininng(totalSum)
        }
        console.log(creditRemaining);
    }
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
                                <div onClick={() => handleAddCourse(course)} className="py-2 bg-[#2F80ED] rounded-lg text-center">
                                    <button className="text-lg font-semibold text-[#FFF] ">Select</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-[312px]">
                <Cart selectedCourse={selectedCourse}
                    totalCredit={totalCredit}
                    creditRemaining={creditRemaining}></Cart>
            </div>
        </div>
    );
};

export default Cards;