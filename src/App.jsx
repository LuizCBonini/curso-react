import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import "./App.css"

const App = () => {

  // O State atualiza o componente
  const [tasks, setTasks] = useState(/*parametro inicial*/[
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true
    }
  ])

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks);
  }

  return (
    <>
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}/>
      </div>
    </>
  )
}

export default App;