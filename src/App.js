import React, { useEffect, useState } from 'react';
import './App.css';
import Task from './Task';
import Age from './components/Age';
import CatFacts from './components/CatFacts';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home } from './components/Home';
import NavBar from './components/NavBar';
import Play from './components/Play';

function App() {
    return (
        <div>
            <Router>
                <NavBar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/age' element={<Age />} />
                    <Route path='/catfacts' element={<CatFacts />} />
                    <Route path='/play' element={<Play />} />
                    <Route path='*' element={<h1>Error 404</h1>} />
                </Routes>
            </Router>
        </div>
    );
};
export default App;
{/* <Box>
                <AppBar>
                    <nav>
                        <Link to='/age'>Age </Link>
                    </nav>
                    <nav>
                        <Link to='/catfacts'>CatFacts </Link>
                    </nav>

                </AppBar>
            </Box> */}