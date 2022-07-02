import React, { useState } from "react";
import data from "./data";
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";
const Reviews = () => {
    // console.log(data[0]);

    const [review, setReview] = useState(0);
    const { image, job, name, text } = data[review];
    const checkIndex = (index) => {
        if (index > data.length - 1) {
            return 0;
        }
        if (index < 0) {
            return data.length - 1;
        }
        return index;
    };
    const random = () => {
        let ran = Math.floor(Math.random() * data.length);
        if (ran === review) {
            ran = review + 1;
        }
        setReview(checkIndex(ran));
        console.log(ran);
    };
    return (
        <div
            className="bg-white md:w-[38rem] w-80 duration-500 px-2 text-center my-5
            shadow-lg p-3 transition-all delay-300 ease-in
            rounded-md hover:shadow-2xl hover:transition-all 
            hover:delay-300 hover:ease-out"
        >
            <div className="flex justify-center">
                <div className="relative md:w-32 md:h-32 duration-500 w-20 h-20 rounded-full">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full block object-cover relative rounded-full"
                    />
                </div>
            </div>
            <h2 className="text-lg font-bold">{name}</h2>
            <h4 className={'underline'}>{job}</h4>
            <p>{text}</p>
            <div className="my-3 flex items-center justify-center">
                <div className="w-full px-10 flex justify-between">
                    <button
                        className="text-5xl md:text-2xl duration-500  md:hover:text-slate-500"
                        onClick={() => {
                            setReview((index) => {
                                const newIndex = index - 1;
                                return checkIndex(newIndex);
                            });
                        }}
                    >
                        <BsFillArrowLeftCircleFill />
                    </button>
                    <button
                        className="text-5xl md:text-2xl duration-500 md:hover:text-slate-500"
                        onClick={() => {
                            setReview((index) => {
                                const newIndex = index + 1;
                                return checkIndex(newIndex);
                            });
                        }}
                    >
                        <BsFillArrowRightCircleFill />
                    </button>
                </div>
            </div>
            <button
                className="ring-2 focus:ring-2 p-2 m-1 ring-black transition-all delay-200 ease-out
             md:hover:bg-gray-900 md:hover:text-white md:hover:transition-all md:hover:delay-200 md:hover:ease-in"
                onClick={random}
            >
                RANDOM
            </button>
        </div>
    );
};

export default Reviews;
