import React from 'react'
import StoryCircle from '../../Components/Story/StoryCircle'
import HomeRight from '../../Components/HomeRight/HomeRight'
import PostCard from '../../Components/Post/PostCard'


const HomePage = () => {
   
    return(
        <div>
            <div className='mt-10 flex w-[100%] justify-center'>
                <div className='w-[45%] px-10'>
                    <div className="storyDiv flex space-x-4 rounded-md justify-start w-full overflow-hidden">
                        {[1,1,1,1,1,1,1].map(()=><StoryCircle />)}
                    </div>
                <div className='space-y-10 w-full mt-10'>
                    {[1,1].map(()=><PostCard />)}
                </div>
                </div>
                <div className='w-[30%] pl-20'>
                    <HomeRight />
                </div>
            </div>
        </div>
    )
}

export default HomePage;