import React from "react";
import Message from "./Message";
import ava from '../../assets/avatar.jpg'
import s from './Message.module.css'

const messageData = {
    avatar: ava,
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

function HW1() {
    return (
        <div className={s.homeworks}>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
        </div>
    );
}

export default HW1;
