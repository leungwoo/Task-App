import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import './App.css';
import Task from './Task';
import Age from './components/Age';
import CatFacts from './components/CatFacts';


// fetch('https://catfact.ninja/fact')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     });


export default function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');



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
                <CatFacts />
            </Box>

            <hr />
            <Age />


        </div>

    );
};

