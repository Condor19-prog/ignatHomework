import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./Greeting.module.css";
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    users: Array<UserType>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, users, error, totalUsers} // деструктуризация пропсов
) => {
    let inputClass = s.greetingError; // need to fix with (?:)
    if (error) {
        inputClass += ` ${s.error} `
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13){
            addUser();
        }
    }

    const userARRAY = users.map(u => <div>Name: <b>{u.name}</b></div> )

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressHandler}/>
            <span>{error}</span>
            <button onClick={addUser} style={{marginLeft: "5px", marginBottom: "5px"}}>add</button><br />
            <span> Колличество людей: {totalUsers}</span><br />
            <span>{userARRAY}</span>
        </div>
    );
}

export default Greeting;
