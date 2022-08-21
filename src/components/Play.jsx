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
    function reset() {
        setCount(0);
    }
    console.log('play component rendered');
    return (
        <>

            <div className='Play'>
                <div
                    className='btn--minus'
                    onClick={decrease}>
                    <div className='circle-text'>
                        -
                    </div>
                </div>

                <Count number={count} />

                <div
                    className='btn--plus'
                    onClick={increase}>
                    <div className='circle-text'>
                        +
                    </div>
                </div>
            </div>
            <Button
                variant="contained"
                className='btn--reset'
                onClick={reset}>
                <div className='reset'>
                    reset
                </div>
            </Button>

        </>
    );
};

export default Play;