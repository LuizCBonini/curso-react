// imr importa o React e sfc e depois tab cria o componente

import React from 'react';

import './Task.css'

const Task = ({task}) => {
    return <div className='task-container'>{task.title}</div>;
}
 
export default Task;