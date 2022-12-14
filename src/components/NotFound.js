import React from "react";

//Added a Robot Image to the Not Found Message: credit to https://www.freepik.com
const mystye = {
    width: '600px',
    height: '400px'
};

//When a route that provides no results, a message page is shown 
const NotFound = (props) => {
    return (
        <div className="not-found">
            <h2>Sorry! No Results Found!</h2>
            <h3>Please try a new search or refresh browser.</h3>
            <img style={mystye} src={require('./Robot.png')} alt='' />
        </div>
    );
};

export default NotFound;