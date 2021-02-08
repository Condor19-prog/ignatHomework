import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import moment from "moment";
import s from './clock.module.css'

function Clock() {


    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const stringTime = moment().format('LTS'); // fix with date
    const stringDate = date?.toDateString(); // fix with date

    return (
        <div className={s.holder}>
            <div className={s.time}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
                <div className={s.date}>
                    {show && (<div>{stringDate}</div>)}
                </div>
            </div>
            <div className={s.btn}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    );
}

export default Clock;
