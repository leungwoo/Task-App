import React, { useState } from 'react';
import Axios from 'axios';
import { Box } from '@mui/material';

const Age = () => {
    const [inputValue, setInputValue] = useState('');
    const [predictedAge, setPredictedAge] = useState(null);
    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${inputValue}`)
            .then((res) => { setPredictedAge(res.data); });

    };

    return (
        <Box padding='100px'>
            <input placeholder='eg Pedro' onChange={(event) => { setInputValue(event.target.value); }} />
            <button onClick={fetchData}>Predict Age</button>
            <h1>Predicted Age:{predictedAge?.age}</h1>
            <h1>Name:{predictedAge?.name}</h1>
            <h1>Count:{predictedAge?.count}</h1>

        </Box>

    );
};

export default Age;