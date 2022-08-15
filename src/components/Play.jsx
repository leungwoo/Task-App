import React, { useState } from 'react';
import { Button } from '@mui/material';
import Count from "./Count";


const Play = () => {
    const [count, setCount] = useState(0);
    function increase() {
        setCount(prevCount => prevCount + 1);
    };
    const decrease = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className='Play'>
            <h2>UseState example</h2>
            <br />
            <Button
                className='btn1'
                variant="outlined"
                onClick={decrease}>Decrease-
            </Button>
            <Count number={count} />

            <Button
                className='btn1'
                variant="outlined"
                onClick={increase}>
                Increase+
            </Button>
        </div>

    );
};

export default Play;