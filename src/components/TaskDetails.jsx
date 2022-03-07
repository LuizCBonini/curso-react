import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import Button from './Button';

const TaskDetails = () => {
    const params = useParams();
    console.log(params)
    return ( <>
        <div className="back-button-container">
            <Button>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, cupiditate? Ullam obcaecati laudantium labore modi.</p>
        </div>
    </> );
}
 
export default TaskDetails;