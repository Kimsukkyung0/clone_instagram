import React from 'react'
import {Modal,ModalOverlay,ModalContent,ModalBody,ModalHeader} from '@chakra-ui/react'

const CommentModal = ({onClose,isOpen}) => {
    return( 
        <div>
            <Modal onClose = {onClose} isOpen={true} isCentered>
                <ModalOverlay />
                <ModalContent>
                   <ModalHeader>
                   </ModalHeader>
                    <ModalBody>
                        <div>
                            <div>
                                {/* <img className=' w-full' src="https://media.istockphoto.com/id/1777995767/ko/%EC%82%AC%EC%A7%84/%EC%A0%A0%ED%88%AC-%ED%8E%AD%EA%B7%84-%EB%82%A8%EA%B7%B9-%EB%8C%80%EB%A5%99.jpg?s=2048x2048&w=is&k=20&c=w7qHCQImBAnbAb_d6WhzmFJwH7kXd5F9w8S_57Jta0o=" alt="" /> */}
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModal;