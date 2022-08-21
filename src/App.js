import './App.css';
import Task from './Task';
import Age from './components/Age';
import CatFacts from './components/CatFacts';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home } from './components/Home';
import NavBar from './components/NavBar';
import Play from './components/Play';
import Meme from './components/Meme';
import Forms from './components/Forms';

function App() {
    return (
        <div>
            <Router>
                <NavBar />

                <Routes>
                    <Route path='/' element={<Home darkMode={false} />} />
                    <Route path='/age' element={<Age />} />
                    <Route path='/catfacts' element={<CatFacts />} />
                    <Route path='/play' element={<Play />} />
                    <Route path='*' element={<h1>Error 404</h1>} />
                    <Route path='/task' element={<Task />} />
                    <Route path="/meme" element={<Meme />} />
                    <Route path="/forms" element={<Forms />} />
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