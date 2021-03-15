import React, {ChangeEvent, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./RequestAPI";
import style from './style.module.scss'

const Request = () => {
    const [valueCheckbox, setValueCheckbox] = useState(false)
    const [error, setError] = useState('')
    const [completed, setCompleted] = useState('')

    const checkboxChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setValueCheckbox(e.currentTarget.checked)
    }
    const sendRequest = () => {
        requestAPI.requestPost(valueCheckbox)
            .then(res => {
                setCompleted(res.data.errorText)
                setError('')
            })
            .catch(error => {
                setCompleted('')
                setError(error.response.statusText)
            })
    }
    return (
        <div>
            <div>
                <SuperCheckbox checked={valueCheckbox} onChange={checkboxChanged}/>
            </div>
            <SuperButton onClick={sendRequest}>Send request</SuperButton>
            <div className={style.completed}>{completed}</div>
            <div className={style.error}>{error}</div>
        </div>
    )
}
export default Request