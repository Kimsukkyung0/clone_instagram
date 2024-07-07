import React from 'react'

const NotificationCard = () =>{
    return (
        <div className='py-2 cursor-pointer'>
            <div className='flex items-center justify-around'>
                <img className="w-10 h-10 py-1 rounded-full" src="https://cdn.pixabay.com/photo/2024/03/08/11/49/marbling-8620587_1280.png" alt="" />
                <div>
                    <span>Full name</span>
                    <span>mentioned in a story</span>
                    <span className='opacity-70'>17h</span>
                </div>
                <img className="w-12 h-12 rounded-lg" src="https://cdn.pixabay.com/photo/2024/03/04/16/38/cat-8612685_1280.jpg" alt="" />
            </div>
        </div>
    )
}

export default NotificationCard;