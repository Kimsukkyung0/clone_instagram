import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import { FaRegFaceGrinWink } from "react-icons/fa6";
import CommentModal from "../Comment/CommentModal"
import "./PostCard.css"
import { useDisclosure } from '@chakra-ui/react';


const PostCard = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [isPostLiked, setIsPostLiked] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const {isOpen, onOpen, onClose} = useDisclosure()
    const handleClick = () => {
        setShowDropDown(!showDropDown);
    }
    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    }
    const handleSavePost = () => {
        setIsSaved(!isSaved)
    }

    const handleOpenCommentModal = () => {
        onOpen(!isOpen)
    }
    return (
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
                    <div className='dropdown'>
                        <BsThreeDots classhName="dots" onClick={handleClick} />
                        <div className='dropdown-content'>
                            {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer' >Delete</p>}
                        </div>

                    </div>

                </div>
                <div className='w-full'>
                    <img className="w-full" src="https://media.istockphoto.com/id/1777995767/ko/%EC%82%AC%EC%A7%84/%EC%A0%A0%ED%88%AC-%ED%8E%AD%EA%B7%84-%EB%82%A8%EA%B7%B9-%EB%8C%80%EB%A5%99.jpg?s=2048x2048&w=is&k=20&c=w7qHCQImBAnbAb_d6WhzmFJwH7kXd5F9w8S_57Jta0o=" alt="" />
                </div>

                <div className='flex justify-between items-center w-full px-5 py-4'>
                    <div className='flex items-center space-x-2'>
                        {isPostLiked ? <AiFillHeart className='text-2xl text-red-500 hover:opacity-50 cursor-pointer' onClick={handlePostLike} /> : <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}
                        <FaRegComment onClick={handleOpenCommentModal} className="text-2xl hover:opacity-50 cursor-pointer" />
                        <RiSendPlaneLine className='text-2xl hober:opacity-50 cursor-pointer' />
                    </div>
                    <div>
                        {isSaved ? (
                            <BsBookmarkFill onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer'/>)
                            : (
                                < BsBookmark onClick={handleSavePost} className='text-xl cursor-pointer'/>
                            )}

                    </div>
                </div>
                <div className='w-full py-2 px-5'>
                    <p>10 likes</p>
                    <p className='opacity-50 py-2 cursor-pointer'>view all 10 comments</p>
                </div>
                <div className='flex px-3 justify-between items-center border-t'>
                    <div className='w-full '>
                        <input className='commentInput w-full px-5 py-4' type="text" placeholder="Add a comment..." />
                    </div>
                    <FaRegFaceGrinWink />
                </div>
                <div>
                    <CommentModal />
                </div>
            </div>
            <CommentModal handledPostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSavePost={handleSavePost} isPostLiked={isPostLiked} isSaved={isSaved} />
        </div>
    )
}

export default PostCard;