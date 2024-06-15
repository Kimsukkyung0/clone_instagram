import React from 'react'

const SearchUserCard = () =>{
    return (
        <div className='py-2 cursor-pointer'>
            <div className='flex items-center '>
                <img className="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2024/03/08/11/49/marbling-8620587_1280.png" alt="" />

                <div className='ml-3'>
                    <p>Full name</p>
                    <p className='opacity-70'>username</p>
                </div>
            </div>
        </div>
    )
}

export default SearchUserCard;