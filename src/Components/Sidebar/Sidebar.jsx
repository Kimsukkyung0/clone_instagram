import React, {useState} from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import {menu} from './SidebarConfig'
import {useNavigate} from 'react-router-dom'
import CreatePostModal from '../Post/CreatePostModal';
import { useDisclosure } from '@chakra-ui/react'
import SearchComponents from '../SearchComponents/SearchComponents';
import NotificationComponents from '../NotificationComponents/NotificationComponents';


const Sidebar = () => {
    const {isOpen, onClose, onOpen } = useDisclosure()
    const [activeTab, setActiveTab] = useState();
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isNotiVisible, setIsNotiVisible] = useState(false);
    const navigate = useNavigate();

    const handleTabClick = (title) =>{
        setActiveTab(title) 
        if(title ==="Profile"){
            navigate("/username")
        } else if(title === "Home"){
            navigate("/")
        }else if (title ==="Create"){
            onOpen()
        }else if (title === "Explore"){
            navigate("/explore")
        }
        if (title ==="Search"){
            setIsSearchVisible(true);
         }else {
            setIsSearchVisible(false);
         }
        if (title ==="Notification"){
            setIsNotiVisible(true);
         }else {
            setIsNotiVisible(false);
        }
    }

    return(
        <div className='sticky top-0 h-[100vh] flex'>
            <div className={`flex flex-col justify-between h-full ${activeTab==="Search" ? "px-2" : "px-10"}`}>
                { <div>
                    {activeTab !== "Search" && <div className='pt-10'>
                        <img className="w-40" src="instagram_logo.png" alt="" />
                    </div>
                        }
                    <div className="mt-10">
                        {
                            menu.map((item) => (
                            <div 
                                onClick={()=>handleTabClick(item.title)} 
                                className="flex items-center mb-5 cursor-pointor text-lg"> 

                            {activeTab === item.title ? item.activeIcon : item.icon}
                            {activeTab !=="Search" && <p className = {`${activeTab === item.title ? "font-bold" : "font-semibold"}`}>{item.title}</p> }
                            </div>
                            ))}
                        
                    </div>
                </div>}
                <div className="flex items-center cursor-pointer pb-10">
                    <IoReorderThreeOutline className='text-2xl' />
                    {activeTab !=="Search" && <p className="ml-5">More</p> }
                </div>  
            </div>       
            <CreatePostModal isOpen={isOpen}  onClose={onClose}/>   
            {isSearchVisible &&< SearchComponents />}
            {isNotiVisible && < NotificationComponents />}
        </div>
    )
}


export default Sidebar;