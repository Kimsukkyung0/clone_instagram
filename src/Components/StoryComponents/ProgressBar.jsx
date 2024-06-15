import React, { useEffect, useState } from 'react'
import "./ProgressBar.css";

const ProgressBar = (index,activeIndex,duration) =>{
    const [progress, setProgress] = useState(0);

    console.log("activeIndex in progress bar: ",activeIndex)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setProgress((prevProgress)=>{
                if(prevProgress<100){
                    return prevProgress+1;
                }
                clearInterval(interval)
                return prevProgress;
            })
        },duration/100)
        return()=>{
            clearInterval(interval)
        }
    },[duration,activeIndex])

    useEffect(()=>{
        setProgress(0)
    },[activeIndex])

    const isActive = index === activeIndex;
    console.log("type of index : ", typeof index);
    console.log("activeIndex : ",  activeIndex);
    console.log ("isActive : ",isActive)
    return(
        <div className={`progress-bar-container ${isActive ? "active":"" }`}>
            {/* instagram */}
            <div className={`progress-bar ${isActive?"progress-bar":""}`} style={{width:`${progress}%`}}>
            </div>
        </div>
    )
}

export default ProgressBar;