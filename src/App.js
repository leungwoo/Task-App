import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import './App.css';
import Task from './Task';
import Axios from 'axios';

// fetch('https://catfact.ninja/fact')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     });


export default function App() {
    const [catFact, setCatFact] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [predictedAge, setPredictedAge] = useState(null);

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${inputValue}`)
            .then((res) => { setPredictedAge(res.data); });

    };

    const fetchCatFact = () => {
        Axios.get('https://catfact.ninja/fact').then((res) => {
            setCatFact(res.data.fact);
        });
    };

    useEffect(() => {
        fetchCatFact();
    }, []);

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        };
        setTodoList([...todoList, task]);
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    };
    const completeTask = (id) => {
        setTodoList(todoList.map((task) => {
            if (task.id === id) {
                return { ...task, completed: true, };
            }
            else { return task; }
        }));
    };

    return (
        <div className='App'>
            <Box className='addTask'>
                <TextField sx={{
                    input: {
                        fontWeight: '700',
                        border: 'none',
                        borderRadius: '4px'
                    },
                    width: { lg: '400px', xs: '250px' },
                    backgroundColor: '#FFFF',
                }}
                    placeholder='Enter New Task'
                    type="text"
                    onChange={(event) => { setNewTask(event.target.value); }} />
                <button onClick={addTask}>AddTask</button>
            </Box>
            <Box className='list'>
                {todoList.map((task) => {
                    return <Task
                        taskName={task.taskName}
                        id={task.id}
                        completed={task.completed}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                    />;
                })}
            </Box>
            <Box>
                <p>{catFact}</p>
            </Box>
            <button onClick={fetchCatFact}>Generate new line</button>
            <hr />
            <Box>
                <input placeholder='eg Pedro' onChange={(event) => { setInputValue(event.target.value); }} />
                <button onClick={fetchData}>Predict Age</button>
                <h1>Predicted Age:{predictedAge?.age}</h1>
                <h1>Name:{predictedAge?.name}</h1>
                <h1>Count:{predictedAge?.count}</h1>
            </Box>
        </div>

    );
};

