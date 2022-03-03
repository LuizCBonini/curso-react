import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick}) => {
    return (
        
        //Para cada Task, renderizara um Task
        <>
            {tasks.map(task => (
                <Task task={task} handleTaskClick={handleTaskClick}/>
            ))}
        </>

    )
}

export default Tasks;