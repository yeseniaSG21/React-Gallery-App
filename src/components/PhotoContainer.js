import React from "react";
import Photos from "./Photos";

//Photo Container where photo data (from API) can be managed
//Resource/Help from: https://teamtreehouse.com/library/data-fetching-in-react-refresh-2022/displaying-the-data
const PhotoContainer = (props) => {
    const photoData = props.data;

    let photoList = photoData.map( photo => (
            <Photos 
                id={photo.id}
                key={photo.id}
                title={photo.title}
                server={photo.server}
                secret={photo.secret}
            />
    ));

    return (
        <div className="photo-container">
            <h1>Photo Gallery</h1>
            <ul>{photoList}</ul>
        </div>
    );
};

export default PhotoContainer;