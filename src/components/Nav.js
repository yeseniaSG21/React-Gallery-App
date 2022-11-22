import React from 'react';
import { NavLink } from 'react-router-dom';

//When you navigate the app with nav links or browser's buttons, the URL will show correct route and data 
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/flower'>Flowers</NavLink></li>
                <li><NavLink to='/waterfalls'>Waterfalls</NavLink></li>
                <li><NavLink to='/murals'>Murals</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;