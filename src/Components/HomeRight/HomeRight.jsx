import React from 'react'
import SuggestionCard from "./SuggestionCard"

const HomeRight = () => {
    return (
        <div>
            <div>
                <div className='flex justify-between item-center '>
                    <div className='flex items-center'>
                        <div>
                            <img className="w-12 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2021/09/24/20/59/jellyfish-6653502_1280.jpg" alt="" />
                        </div>
                        <div className='ml-4 '>
                            <p className='font-semibold'>FullName</p>
                            <p className='opacity-70'>username</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-blue-400 font-semibold text-sm cursor-pointer'>Switch</p>
                    </div>

                </div>
                <div>
                        <div className='space-y-5 mt-10'>
                            <div className='flex items-center justify-between'>
                                <p className='text-sm opacity-80 font-bold'>Suggested for you</p>
                                <p className='text-sm font-semibold'>See All</p>
                            </div>
                            {[1, 1, 1, 11, 1].map(() => <SuggestionCard />)} </div>
                    </div>
            </div>
        </div>
    )
}

export default HomeRight;