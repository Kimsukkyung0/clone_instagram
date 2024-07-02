import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./StoryCircle.css"

const StoryCircle = () =>{
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate("/story")
    }
    return(
        <div onClick={handleNavigate} className='cursor-pointer flex flex-col'>
            <div className='story-btn ml-2 mr-2 rounded-full'>
                 <img className="story-pic w-16 h-16 ml-1 mt-1 rounded-full border" src="https://cdn.pixabay.com/photo/2021/09/24/20/59/jellyfish-6653502_1280.jpg" alt="" />
        </div>
            <p className='text-center'>Username</p>
        </div>
    )
}

export default StoryCircle;