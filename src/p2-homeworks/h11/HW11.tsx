import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './hw11.module.css'

export function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeDoubleRangeHandler = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    const onChangeRangeHandler = (value: number) => {
        setValue1(value);
    }

    return (
        <div className={s.hw11}>
            <hr/>
            homeworks 11
            <div>
                <div>
                    Range: {value1}
                </div>
                <SuperRange
                    value={value1}
                    onChangeRange={onChangeRangeHandler}
                    // сделать так чтоб value1 изменялось
                />
            </div>
            <div>
                <span>SuperDoubleRange: {value1}</span>

                {/*не знаю почему нельзя зажав кнопку изменять*/}
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeDoubleRangeHandler}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>
        </div>
    );
}

export default HW11;
