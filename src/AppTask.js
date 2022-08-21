import React from 'react';

const AppTask = (props) => {

    return (
        <div className='task'
            style={{ backgroundColor: props.completed ? "blue" : "white" }}>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
            <button onClick={() => props.completedTask(props.id)}>completed</button>
        </div>
    );
};

export default AppTask;