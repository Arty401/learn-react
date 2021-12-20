import React from 'react';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../constants/routes";


const Navbar = () => {
    return (
        <header>
            <nav>
                <NavLink to={ROUTES.main}>Home</NavLink>
                <NavLink to={ROUTES.login}>Login</NavLink>
            </nav>
        </header>
    );
};

export default Navbar;