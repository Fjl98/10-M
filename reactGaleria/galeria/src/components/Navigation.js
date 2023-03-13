import React from "react";
import { NavLink } from "react_router-dom";

const Navigator = () => {
    return(<nav className="main-nav">
        <ul>
            <li><NavLink to="/mountain">Montaña</NavLink></li>
            <li><NavLink to="/beach">Playa</NavLink></li>
            <li><NavLink to="/birds">Pajaros</NavLink></li>
            <li><NavLink to="/food">Comida</NavLink></li>
        </ul>
    </nav>);
} 

export default Navigator;
