import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Photos from "./Photos";
import NotFound from "./NotFound";

const PhotoContainer = ({ photoData, performSearch }) => {
    const location = useLocation();
    let params = useParams();

    //
    //Reference: https://www.w3schools.com/jsref/prop_loc_pathname.asp
    useEffect(() => {
        if (params.tag) {
            performSearch(params.tag);
        } else {
            const pathname = location.pathname.substring(1);
            performSearch(pathname);
        }
    }, [params.tags, location.pathname]);

    let photoList;

    if (photoData.length > 0) {
        photoList = photoData.map((photo) => (
            <Photos 
                id={photo.id}
                key={photo.id}
                title={photo.title}
                server={photo.server}
                secret={photo.secret}
            />
        ));
    } else {
        photoList = <NotFound />;
    }

    return (
        <div className="photo-container">
            <h2>Photo Results</h2>
            <ul>{photoList}</ul>
        </div>
    );
};

export default PhotoContainer;