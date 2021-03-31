import React, {ChangeEvent, useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './HW8.module.css'

export type initialPeopleType = {
    _id: number
    name: string
    age: number
}

export const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => {
            return <div className={s.block} key={p._id}>
                <div><span style={{cursor: 'default'}}>Имя: {p.name}</span></div>
                <div><span style={{cursor: 'default'}}>Возраст: {p.age}</span></div>
            </div>
        }
    )

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const setCheckedPeople = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))
        }
    }

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <input type="checkbox" onChange={e => setCheckedPeople(e)}/> check 18
        </div>
    );
}

export default React.memo(HW8);
