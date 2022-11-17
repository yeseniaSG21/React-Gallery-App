import React from "react";
import Robot from "./Images/Robot.png"

const NotFound = (props) => {
    return (
        <li class="not-found">
            <h3>Sorry! No Results Found</h3>
            <img src={Robot} alt="Robot" />
            <p>You search did not return any results. Please try again.</p>
        </li>
    );
};

export default NotFound;