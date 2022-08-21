import React from 'react';
import { Box, Button } from "@mui/material";
import memeData from '../memeData';

const Meme = () => {
    const [memeImage, setMemeImage] = React.useState(memeData);


    const itemData = () => {
        const memesArr = memeData.data.memes;
        setMemeImage(memesArr.map((i) => { return <h1>{i.name}</h1>; }));

    };

    function getMemeImage() {
        const memeArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomNumber].url;
        setMemeImage(url);
    }

    return (
        <div className="Meme" >
            <Button variant="contained" onClick={getMemeImage}>Change image</Button>
            <Box>
                <img src={memeImage} width="500px" height="500px" className='image' />
                {itemData}
            </Box>
        </div>
    );
};

export default Meme;