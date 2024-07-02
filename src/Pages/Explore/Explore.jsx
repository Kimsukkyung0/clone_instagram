import React from 'react'
import ExploreCard from '../../Components/ExploreComponents/ExploreCard';
// import ExplorePart from '../../Components/ExploreComponents/ExplorePart';
// import ReqUserPostPart from '../../Components/ProfileComponents/ReqUserPostPart';
const Explore = () =>{
    return (
        <div className="ml-40 mt-10 h-full justify-center">
            <div className='flex flex-wrap w-[70%]'>
            {[1,1,1,1,1,1,1,1,1].map(()=><ExploreCard />)}
            </div>
        </div>
    )

}
export default Explore;