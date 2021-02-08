import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from './hw10.module.css'
import krutilka from '../../assets/krutilka.png'
import {hexToRgb} from "@material-ui/core";

function HW10() {
    const isLoading = useSelector((state: AppStoreType) => state.loading.isLoading)
    const dispatch = useDispatch()

    // const loading = false;

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log("loading...");
    };

    return (
        <div className={s.hw10}>
            <div className={s.header}>
                homeworks 10
            </div>
            <div className={s.krutilka}>
                {isLoading
                    ? (
                        <img src={krutilka}/>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default HW10;
