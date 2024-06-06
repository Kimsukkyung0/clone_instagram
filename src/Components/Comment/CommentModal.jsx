import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs';

const CommentModal = ({ onClose, isOpen }) => {
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className='flex h-[75vh]'>
                            <div className='w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full' src="https://media.istockphoto.com/id/1777995767/ko/%EC%82%AC%EC%A7%84/%EC%A0%A0%ED%88%AC-%ED%8E%AD%EA%B7%84-%EB%82%A8%EA%B7%B9-%EB%8C%80%EB%A5%99.jpg?s=2048x2048&w=is&k=20&c=w7qHCQImBAnbAb_d6WhzmFJwH7kXd5F9w8S_57Jta0o=" alt="" />
                            </div>
                            <div className='border w-[55%]'>
                                <div className=''>
                                    <div className='flex items-center'>
                                        <img className='w-9 h-9 rounded-full'
                                            src="https://cdn.pixabay.com/photo/2024/05/09/22/54/penguin-8751952_960_720.jpg"
                                            alt="" />
                                    </div>
                                    <div className='ml-2'>
                                        <p>username</p>
                                    </div>
                                </div>
                                </div>
                                <BsThreeDots />
                               </div>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModal;