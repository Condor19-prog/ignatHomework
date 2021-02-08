import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './h5.module.css'

function Header() {
    return (
        <div>
            <NavLink className={s.link} to={PATH.PRE_JUNIOR}><h3>Pre-junior</h3></NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR}><h3>Junior</h3></NavLink>
            <NavLink className={s.link} to={PATH.JUNIOR_PLUS}><h3>Junior-plus</h3></NavLink>
        </div>
    );
}

export default Header;
