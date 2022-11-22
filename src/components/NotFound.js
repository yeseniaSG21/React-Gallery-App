import React from "react";

//Added a Robot Image to the Not Found Message: credit to https://www.freepik.com
const mystye = {
    width: '500px',
    height: '500px'
};

const NotFound = (props) => {
    return (
        <li className="not-found">
            <h3>Sorry! No Results Found</h3>
            <img style={mystye} src={require('./Robot.png')} alt='' />
            <p>Your search did not return any results. Please try again or return home.</p>
        </li>
    );
};

export default NotFound;