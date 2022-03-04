import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
    return (
        
        //Para cada Task, renderizara um Task
        <>
            {tasks.map(task => (
                <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
            ))}
        </>

    )
}

export default Tasks;