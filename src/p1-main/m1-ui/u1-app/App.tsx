import React from "react";
import s from "./App.module.css";
import Navbar from "../../../p2-homeworks/h5/Navbar";
import HW5 from "../../../p2-homeworks/h5/HW5";
import {HashRouter} from "react-router-dom";


function App() {
    return (
        <HashRouter>
            <div className={s.App}>
                <div><b>react homeworks:</b></div>
                <Navbar/>
                <HW5/>
            </div>
        </HashRouter>
    );
}

export default App;
