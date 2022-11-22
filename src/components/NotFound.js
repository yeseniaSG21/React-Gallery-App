import React from "react";

//Added a Robot Image to the Not Found Message: credit to https://www.freepik.com
const mystye = {
    width: '500px',
    height: '400px'
};

const NotFound = (props) => {
    return (
        <li className="not-found">
            <h2>Sorry! No Results Found</h2>
            <p>Your search did not return any results. Please try again or return home.</p>
            <img style={mystye} src={require('./Robot.png')} alt='' />
        </li>
    );
};

export default NotFound;