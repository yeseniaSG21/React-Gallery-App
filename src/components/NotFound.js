import React from "react";

const NotFound = (props) => {
    return (
        <li class="not-found">
            <h3>Sorry! No Results Found</h3>
            <img src={require('./Robot.png')} alt='' />
            <p>You search did not return any results. Please try again.</p>
        </li>
    );
};

export default NotFound;