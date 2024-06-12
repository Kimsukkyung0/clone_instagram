import React, { useState } from 'react'
import styled from 'styled-components'

const StoryViewerContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background-color:black;
`

const StoryImage = styled.div`
    max-height:90vh;
    object-fit : contain;
`
const StoryViewer = ({stories}) =>{
    const [currentStoryIndex,setCurrentStoryIndex] = useState(0);
    const [activeIndex,setActieIndex] = useState(0);

    const handleNextStory = () =>{
        if(currentStoryIndex<stories.length-1){
            setCurrentStoryIndex()
        }
    }
    return(
        <div>
            <div>
                <StoryViewerContainer>
                    <StoryImage src={stories?.[currentStoryIndex].image} />
                </StoryViewerContainer>
            </div>
        </div>
    )
}

export default StoryViewer;