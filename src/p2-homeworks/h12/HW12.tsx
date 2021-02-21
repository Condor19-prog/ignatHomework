import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some'];

export function HW12() {
    const theme = useSelector((state: AppStoreType) => state.themeReducer.currentTheme); // useSelector
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()
    const onChangeCallback = (option: string) => {
        dispatch(changeThemeAC(option))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text' ] + ' ' + s.span}>
                homeworks 12
            </span>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
