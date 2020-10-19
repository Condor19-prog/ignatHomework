import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";

function Error404() {

        return (
            <div style={{marginTop:'50px', fontSize:'15px'}}>
                <div>
                    <NavLink to={PATH.PRE_JUNIOR}><h3 style={{textDecoration: 'none'}}>перейти к главной странице</h3></NavLink>
                </div>
            </div>
    )
}

export default Error404;
