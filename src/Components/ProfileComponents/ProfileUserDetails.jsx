import React from 'react'
import {TbCircleDashed} from 'react-icons/tb'

export const ProfileUserDetails = () =>{
    return(
        <div className="py-10 w-full">
            <div className="flex item-center">
                <div className='w-[15%]'>
                    <img className='w-32 h-32 rounded-full' 
                    src="https://cdn.pixabay.com/photo/2024/05/09/22/54/penguin-8751952_960_720.jpg" 
                    alt="" />
                </div>
            

            <div>
                <div className="flex space-x-10 items-center">
                <p>username</p>
                    <button>Edit profile</button>
                    <TbCircleDashed></TbCircleDashed>
                </div>
                <div className="flex space-x-10">
                    <div>
                        <span className='font-semibold mr-2'>10</span>
                        <span>posts</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>10</span>
                        <span>follower</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>3</span>
                        <span>following</span>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}