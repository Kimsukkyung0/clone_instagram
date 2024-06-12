import {AiOutlineHome,AiFillHome,AiOutlineSearch,AiOutlineCompass,AiFillCompass ,AiOutlineMessage,AiFillMessage, AiOutlineHeart,AiFillHeart} from "react-icons/ai";
import {RiVideoLine,RiVideoFill, RiSearchFill} from "react-icons/ri"
import { CgProfile } from "react-icons/cg";
import { CiSquarePlus } from "react-icons/ci";
import { FaSquarePlus } from "react-icons/fa6";

export const menu=[
    {title:"Home", icon:<AiOutlineHome className="text-zxl mr-5"/> ,activeIcon:<AiFillHome className="text-zxl mr-5"/>},
    {title:"Search", icon:<AiOutlineSearch className="text-zxl mr-5"/> ,activeIcon:<RiSearchFill className="text-zxl mr-5"/>},
    {title:"Explore", icon:<AiOutlineCompass className="text-zxl mr-5"/>, activeIcon:<AiFillCompass className="text-zxl mr-5"/> },
    {title:"Reels", icon:<RiVideoLine className="text-zxl mr-5"/>, activeIcon:<RiVideoFill className="text-zxl mr-5"/>},
    {title:"Message", icon:<AiOutlineMessage className="text-zxl mr-5"/>, activeIcon:<AiFillMessage className="text-zxl mr-5"/>},
    {title:"Notification", icon:<AiOutlineHeart className="text-zxl mr-5"/>, activeIcon:<AiFillHeart className="text-zxl mr-5"/>},
    {title:"Create", icon:<CiSquarePlus className="text-zxl mr-5"/>, activeIcon:<FaSquarePlus className="text-zxl mr-5"/>},
    {title:"Profile", icon:<CgProfile className="text-zxl mr-5"/>, activeIcon:<CgProfile className="text-zxl mr-5"/>},
];