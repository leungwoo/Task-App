import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar>
            <Toolbar position='sticky' className='Nav'>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/age">Age</Link>
                <Link className="link" to="/catfacts">CatFacts</Link>
                <Link className='link' to='/play'>Play </Link>
                <Link className='link' to='/task'> To Do App</Link>
                <Link className="link" to="/meme">Memes</Link>
                <Link className="link" to="/forms">Forms</Link>
            </Toolbar>
        </AppBar>

    );


};

export default NavBar;