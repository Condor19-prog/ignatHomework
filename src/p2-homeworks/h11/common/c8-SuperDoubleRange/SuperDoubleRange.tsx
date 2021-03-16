import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const useStyles = makeStyles({
        root: {
            width: 300,
        },
    });

   function RangeSlider() {
        const classes = useStyles()

        const handleChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
            const [v1, v2] = newValue as Array<number>
            onChangeRange && onChangeRange([v1, v2])
        };

        return (
            <div className={classes.root}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
            </div>
        );
    }

    return (
        <>
            <RangeSlider/>
        </>
    );
}

export default SuperDoubleRange;
