import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Axios from 'axios';
import { Link } from 'react-router-dom';


const CatFacts = () => {
    const [catFact, setCatFact] = useState('');

    const fetchCatFact = () => {
        Axios.get('https://catfact.ninja/fact').then((res) => {
            setCatFact(res.data.fact);
        });
    };

    useEffect(() => {
        fetchCatFact();
    }, []);

    return (
        <Box padding='100px'>
            {catFact}
            <button onClick={fetchCatFact}>Generate Cat Fact</button>

        </Box>


    );
};

export default CatFacts;