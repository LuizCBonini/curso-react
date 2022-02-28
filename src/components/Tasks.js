import React from "react";
import Task from "./Task";

const Tasks = ({tasks}) => {
    return (
        
        //Para cada Task, renderizara um Task
        <>
            {tasks.map(task => <Task task={task}/>)}
        </>

    )
}

export default Tasks;