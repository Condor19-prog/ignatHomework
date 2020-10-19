import React from "react";
import Error404 from "./pages/Error404";
import {Route, Switch, Redirect} from "react-router-dom";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/Junior+";
import PreJunior from "./pages/PreJunior";


export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior_plus'
}

function Routes() {
    return (
        <Switch>
            <Route exact path="/" render={(props: any) => <Redirect to={PATH.PRE_JUNIOR} />}/>
            <Route exact path="/junior" component={Junior}/>
            <Route exact path="/junior_plus" component={JuniorPlus}/>
            <Route exact path={PATH.PRE_JUNIOR} component={PreJunior}/>
            <Route path='/*' component={Error404}/>
        </Switch>

    );
}

export default Routes;
