import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CommentCard = () =>{

    const [isCommentLiked, setIsCommenLiked] = useState();
    const handleLikeComment=()=>{
        setIsCommenLiked(!isCommentLiked)
    }
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-y-3'>
                    <div>
                        <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2024/05/09/22/54/penguin-8751952_960_720.jpg" alt="" />
                    </div>
                    <div className='ml-3'>
                        <p>
                            <span className='font-semibold'>commentuser01</span>
                            <span className='ml-2'>This is a comment</span>
                            </p>
                            <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                                <span>1 min ago</span>
                                <span>
                                    23 likes
                                </span>
                            </div>
                    </div>
                </div>
                {isCommentLiked ? (<AiFillHeart onClick={handleLikeComment} className='text-xs hover:opacity cursor-pointer text-red-600' />) 
                : 
                (<AiOutlineHeart onClick={handleLikeComment} className='text-xs hover:opacity cursor-pointer ' />)}
            </div>
        </div>
    )
}

export default CommentCard;