import React from 'react';
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa';
import "./ReqUserPostCard.css"

const ReqUserPostCard = () =>{
    return (
        <div className='p-2'>
            <div className='post w-60 h-60 '>
                <img className="cursor-pointer" src="https://cdn.pixabay.com/photo/2021/05/02/08/33/jellyfish-6222849_1280.jpg" alt='' />
                <div className="overlay">
                    <div className="overlay-text flex justify-between">
                        <div className='flex space-x-1'>
                            <AiFillHeart /> <span>10</span>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <FaComment /> <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReqUserPostCard;
