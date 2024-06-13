import React from "react";
import StoryViewer from '../../Components/StoryComponents/StoryViewer'



const Story = () =>{

    const story = [
        {
            image:"https://cdn.pixabay.com/photo/2019/02/20/10/04/penguin-4008872_640.jpg",   
        },{
            image:"https://cdn.pixabay.com/photo/2023/02/17/08/44/king-penguin-7795519_640.jpg"
        },{
            image:"https://cdn.pixabay.com/photo/2022/01/30/14/20/penguins-6981054_640.jpg"
        },{
            image:"https://cdn.pixabay.com/photo/2022/10/18/11/11/penguin-7529925_640.jpg"
        }
    ]
    return(
        <div>
            <StoryViewer stories={story}/>
        </div>
    )
}

export default Story;