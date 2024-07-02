import React from 'react';
import { FaComment } from 'react-icons/fa';
import "./ExploreCard.css"

const ExploreCard = ()=>{
    return(
    <div className='p-2 w-1/3'>
    <div className='post w-60 h-60'>
        <img className="cursor-pointer" src="https://cdn.pixabay.com/photo/2024/05/09/22/54/penguin-8751952_960_720.jpg" alt='' />
        <div className="overlay">
            <div className="overlay-text flex justify-between">
                <div className='flex space-x-2 items-center'>
                    <FaComment /> <span>0</span>
                </div>
            </div>
        </div>
    </div>
</div>
);
}


export default ExploreCard;