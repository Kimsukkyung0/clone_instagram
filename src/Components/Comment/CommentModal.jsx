import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'
import { BsBookmark, BsBookmarkFill, BsThreeDots } from 'react-icons/bs';
import CommentCard from './CommentCard';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import { FaRegFaceGrinWink } from 'react-icons/fa6';
import './CommentModal.css'

const CommentModal = ({ 
    onClose, isOpen, isSaved, isPostLiked, handlePostLike, handleSavePost }) => {
    const comments = [1,1,1]
     return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className='flex h-[60vh]'>
                            <div className='w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full' src="https://media.istockphoto.com/id/1777995767/ko/%EC%82%AC%EC%A7%84/%EC%A0%A0%ED%88%AC-%ED%8E%AD%EA%B7%84-%EB%82%A8%EA%B7%B9-%EB%8C%80%EB%A5%99.jpg?s=2048x2048&w=is&k=20&c=w7qHCQImBAnbAb_d6WhzmFJwH7kXd5F9w8S_57Jta0o=" alt="" />
                            </div>

                            <div className='w-[52%] pl-8 relative'>
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full'
                                                src="https://cdn.pixabay.com/photo/2024/05/09/22/54/penguin-8751952_960_720.jpg"
                                                alt="" />
                                        </div>
                                        <div className='ml-2'>
                                            <p>username</p>
                                        </div>
                                    </div>

                                    <BsThreeDots />
                                </div>
                                <hr />
                                <div className='comment'>
                                    {comments.map(() => <CommentCard />)}
                                </div>

                                <div className='absolute bottom-0 w-[98%] py-3'>
                                    <div className='flex justify-between items-center w-full px-5 py-4'>
                                        <div className='flex items-center space-x-2 w-full'>
                                            {isPostLiked ? <AiFillHeart className='text-2xl text-red-500 hover:opacity-50 cursor-pointer' onClick={handlePostLike} /> : <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}
                                            <FaRegComment className="text-2xl hover:opacity-50 cursor-pointer" />
                                            <RiSendPlaneLine className='text-2xl hober:opacity-50 cursor-pointer' />
                                        </div>
                                        <div>
                                            {isSaved ? (
                                                <BsBookmarkFill className='text-2xl hover:opacity-50 cursor-pointer' onClick={handleSavePost} />)
                                                : (< BsBookmark className='cursor-pointer' onClick={handleSavePost} />)}

                                        </div>
                                    </div>
                                    <div className='py-2 px-5'>
                                        <p>10 likes</p>
                                        <p className='opacity-50 text-sm'>1 day ago</p>
                                    </div>
                                    <div className='flex px-3 justify-between items-center border'>
                                        <div className=''>
                                            <input className='commentInput' type="text" placeholder="Add a comment..." />
                                        </div>
                                        <FaRegFaceGrinWink />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModal;