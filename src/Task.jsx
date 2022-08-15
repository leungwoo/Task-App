import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import './App.css';

export default function Task(props) {
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
        <div className='task '
            style={{ backgroundColor: props.completed ? "green" : "white" }}>
            <Box className='addTask' padding='100px'>
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
            <h1>{props.taskName}</h1>
            <button onClick={() => props.completeTask(props.id)}>completed</button>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>);
};

