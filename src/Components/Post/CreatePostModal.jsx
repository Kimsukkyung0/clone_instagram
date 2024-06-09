import React,{useState} from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody,Button } from '@chakra-ui/react'
import { FaPhotoVideo } from 'react-icons/fa';

const CreatePostModal = (
    onClose, isOpen
) => {
    const [isDragOver,setIsDragOver] = useState(false)
    const [file,setFile]=useState();
    const handleDrop=(event)=>{
        event.preventDefault()
        const droppedFile = event.dataTransfer.file[0];
        if(droppedFile.type.startsWith("image/") || droppedFile.type.startWith("video/")){
            setFile(droppedFile)
        }
    }
    
    const handleDragOver=(event)=>{
        event.preventDefault();
        event.dataTransfer.dropEffect="copy";
        setIsDragOver(true)
    }
    const handleDragLeave=()=>{
        setIsDragOver(false)
    }

    const handleOnChange=(e)=>{
        const file = e.target.file[0];
        if(file && (file.type.starstWith("image/*")|| file.type.startsWith("video/"))){
            setFile(file);
        }else{
            setFile(null);
            alert("Please select an image or video")
        }

    return (
        <div>
            <Modal className='w-[50%]' onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <div className='flex justify-between py-1 px-10 items-center'>
                        <p>Create New Post</p>
                        <Button varient={"ghost"} size="sm" colorScheme={"blue"}>
                            Share
                        </Button>
                    </div>
                    <hr />
                    <ModalBody>
                        <div>
                            <div>
                                <div onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                className='drag-drop h-full'
                                >
                                    <div>
                                        <FaPhotoVideo className='text-6xl'/>
                                        <p>Drag photos and videos here</p>
                                    </div>
                                    <label htmlFor="file-upload" className='custom-file-upload'>Select From Computer</label>
                                    <input type="text" id="file-upload" accept="image/*, video/*" onchange={handleOnChange} />
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CreatePostModal