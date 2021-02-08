import React, {useState} from "react";

type PriorityType = 'all' | 'height' | 'low' | 'middle'; // need to fix any
type AffairType = {
    id: number
    name: string
    priority: PriorityType
};

const HW2 = () => {

    const [defaultData, setDefaultData] = useState<Array<AffairType>>([
        {id: 1, name: "React", priority: "height"},
        {id: 2, name: "anime", priority: "low"},
        {id: 3, name: "games", priority: "low"},
        {id: 4, name: "work", priority: "height"},
        {id: 5, name: "html & css", priority: "middle"},
    ]);

    const [filter, setFilter] = useState<PriorityType>("all")

    let changeFilter = (value: PriorityType) => {
        setFilter(value)
    }

    const deleteTask = (nameID: number) => {
        setDefaultData(defaultData.filter(d => d.id !== nameID))
    }

    let dat = defaultData;

    if(filter === "low") {
        dat = defaultData.filter(f => f.priority === "low");
    }
    if(filter === "middle") {
         dat = defaultData.filter(f => f.priority === "middle");
    }
    if(filter === "height") {
         dat = defaultData.filter(f => f.priority === "height");
    }


    const data = dat.map(d => <div key={d.id}><b>name:</b> {d.name} - <b>priority:</b> {d.priority}
        <button onClick={() => deleteTask(d.id)}>x</button>
    </div>)

    const showAllTasks = () => setFilter("all")


    return (
        <div>
            {data}
            <button onClick={() => changeFilter("low")}>low</button>
            <button onClick={() => changeFilter("middle")}>middle</button>
            <button onClick={() => changeFilter("height")}>height</button>
            <button onClick={showAllTasks}>all</button>
        </div>
    )
}


export default HW2;
