import React from "react";

//Photo componenet to display the li and img elements of each photo
const Photos = (props) => {
    return (
        <li>
            <img 
                src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} 
                alt={props.title}
            />
        </li>
    );
};

export default Photos;