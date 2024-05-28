import React from 'react'
import { BsThreeDots } from 'react-icons/bs';

const PostCard = () =>{
    return(
    <div>
        <div className='border rounded-md w-full'>
            <div className='flex justify-between items-center w-full py-4 px-5'>
                <div className='flex items-center'>
                    <div>
                        <img className="h-16 w-16 rounded-full" src="https://cdn.pixabay.com/photo/2024/05/15/16/15/sky-8763986_640.jpg" alt="" />
                    </div>
                    <div className='pl-5'>
                        <p className="font-semibold text-sm">username</p>
                        <p className="font-thin text-sm">location</p>
                    </div>
                </div>
                <div>
                    <BsThreeDots />
                    <div className='dropdown-content'>
                    <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer' >Delete</p>
                    </div>
                    
                </div>
                
            </div>
         </div>
</div>
    )
}

export default PostCard;