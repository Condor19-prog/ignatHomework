import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from 'uuid'


export type UserType = {
    _id: string | null
    name: string | null
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        const newUser: UserType = {name: name, _id: v1()}
        setUsers([...users, newUser]);
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    );
}

export default HW3;
