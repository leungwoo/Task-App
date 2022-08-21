import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import './App.css';
import AppTask from './AppTask';

export default function Task() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');

    function addTask() {

        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false
        };
        task.taskName === "" ? alert("Input a Task") : setTodoList([...todoList, task]);
    };
    const deleteTask = (id) => {
        setTodoList(todoList.filter(task => task.id !== id));
    };

    const completedTask = (id) => {
        setTodoList(prevTodoList => {
            return prevTodoList.map((t) => {
                return t.id === id ? { ...t, completed: true } : t;
            });
        });
    };


    return (
        <div className='App'>
            <Box className='addTask' padding='100px'>
                <TextField
                    sx={{
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
                    return (
                        <AppTask
                            id={task.id}
                            taskName={task.taskName}
                            completed={task.completed}
                            deleteTask={deleteTask}
                            completedTask={completedTask}
                        />
                    );

                })}
            </Box>

        </div>);
};

