import React from 'react';
import { NavLink } from 'react-router-dom';
import { getSearchParamsForLocation } from 'react-router-dom/dist/dom';

//When you navigate the app with nav links or browser's buttons, the URL will show correct route and data 
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/sunsets' onClick={() => search("sunsets")}>Sunsets</NavLink></li>
                <li><NavLink to='/mountains' onClick={() => search("mountains")}>Mountains</NavLink></li>
                <li><NavLink to='/elephants' onClick={() => search("elephants")}>Elephants</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;