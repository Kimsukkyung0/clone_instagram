import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar'
import HomePage from '../HomePage/HomePage'
import Profile from '../Profile/Profile'
import Story from '../Story/Story';
import Explore from '../Explore/Explore';


    const Router = () => {
        return (
        <div>
            <div className="flex">
                <div className='w-[30%] border border-l-slate-500 pl-10 '>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<HomePage />}></Route>
                        <Route path='/username' element={<Profile />}></Route>
                        <Route path='/story' element={<Story />}></Route>
                        <Route path='/explore' element={<Explore />}></Route>
                    </Routes>
                </div>
            </div>
         </div>
    )
}

export default Router