import React from 'react';
import { NavLink } from 'react-router-dom';

//When you navigate the app with nav links or browser's buttons, the URL will show correct route and data 
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/sunsets'>Sunsets</NavLink></li>
                <li><NavLink to='/landscapes'>Landscapes</NavLink></li>
                <li><NavLink to='/elephants'>Elephants</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;