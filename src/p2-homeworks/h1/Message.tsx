import React from "react";
import s from '../h1/Message.module.css'



type messageDataType = {
    avatar: any
    name: string
    message: string
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={s.messageBlock}>
            <div className={s.firstBlock}><img className={s.avatar} src={props.avatar}/></div>
            <div className={s.secondBlock}>
            <div className={s.message}>{props.message}</div>
            <div className={s.name}>{props.name}</div>
            <div className={s.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
