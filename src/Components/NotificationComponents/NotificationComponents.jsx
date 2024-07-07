import React from 'react';
import "./NotificationCard.css"
import NotificationCard from './NotificationCard';

const NotificationComponents = () =>{
    return (
        <div className='noti-container'>
            <div className='px-3 pb-5'>
                <h1 className='text-xl pb-3'>Notifications</h1>
            </div>

            <hr />

            <div className='px-3 pt-5'>
            <h3 className='font-semibold'>Today</h3>
                {[1,1,1,1,1,1,1].map(() => <NotificationCard />)}
            </div>
        </div>
    )
}

export default NotificationComponents;