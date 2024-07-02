import React from 'react';
import ExploreCard from './ExploreCard';


const ExplorePart = () =>{
    return (
        <div className='w-full'>          
        <div className='flex flex-wrap '>
           {[1,1,1,1,1,1,1].map(()=><ExploreCard />)}
        </div>
    </div>
    )
}

export default ExplorePart;