import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}><h3>Pre-junior</h3></NavLink>
            <NavLink to={PATH.JUNIOR}><h3>Junior</h3></NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}><h3>Junior-plus</h3></NavLink>
        </div>
    );
}

export default Header;
