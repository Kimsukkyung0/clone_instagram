import React from 'react'
import { useNavigate } from 'react-router-dom';

const StoryCircle = () =>{
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate("/story")
    }
    return(
        <div onClick={handleNavigate} className='cursor-pointer flex flex-col'>
            <img className="w-16 h-16 ml-2 mr-2 rounded-full" src="	https://cdn.pixabay.com/photo/2021/09/24/20/59/jellyfish-6653502_1280.jpg" alt="" />
            <p className='text-center'>Username</p>
        </div>
    )
}

export default StoryCircle;