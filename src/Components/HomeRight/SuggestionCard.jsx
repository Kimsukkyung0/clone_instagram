import React from 'react'

const SuggestionCard = () => {
    return (
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img className="w-9 h-9 rounded-full" src="https://cdn.pixabay.com/photo/2021/05/02/08/33/jellyfish-6222849_1280.jpg" alt="" />

                    <div className='ml-4'>
                        <p className='text-sm font-semibold'>username</p>
                        <p className='text-xs font-semibold opacity-70'>follows you</p>
                    </div>
                </div>
                <p className='text-blue-400 font-semibold text-sm cursor-pointer'>Follow</p>
            </div>
    )
}

export default SuggestionCard;