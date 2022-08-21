import React from 'react';

export default function Count(props) {
    console.log('Count component rendered');
    return (
        <div className='counter'>
            {props.number}
        </div>
    );
}

