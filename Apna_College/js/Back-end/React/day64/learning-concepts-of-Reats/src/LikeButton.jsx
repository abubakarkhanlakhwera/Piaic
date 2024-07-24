import { useState } from "react";

function LikeButton() {
    let likestyle= {color : "red"};
    //state variable an be use inside the funtion
    let [isLiked, setIsLiked] = useState(false);
    let [clicks, setClicks] = useState(0);
    let toggleLike = () => {
    setIsLiked(!isLiked); 
    setClicks(clicks + 1);
   
    }
    return(
        <>
        <p>Likes = {clicks}</p>
        <p onClick={toggleLike} >
            {
                isLiked? <i style={likestyle} class="fa-solid fa-heart"></i>:<i class="fa-regular fa-heart"></i>
            }
            </p>
            </>
    )
};

export {LikeButton};