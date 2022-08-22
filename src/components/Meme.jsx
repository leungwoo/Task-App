import React from 'react';
import { Box, Button } from "@mui/material";
import memeData from '../memeData';

const Meme = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [memeImage, setMemeImage] = React.useState(memeData.data.memes);


    function getMemeImage() {
        const memeArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomNumber].url;
        setMemeImage(url);
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }
    return (
        <Box sx={{ marginTop: "30px" }}>
            <form>
                <input
                    type="text"
                    placeholder='Top-Text'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder='Bottom-Text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    onClick={getMemeImage}>
                    Change image
                </Button>
            </form>
            <div className="Meme" >
                <img src={memeImage} width="500px" height="500px" className='meme--image' />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </Box>
    );
};

export default Meme;