import React, { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'

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

  useEffect(() => {
    const response = await.axios.get('')
  }, []);

  const handleTaskClick = (TaskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === TaskId) return { ...task, completed: !task.completed}
      return task;
    })
    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks)
  }

  return (
    <Router>
      <div className='container'>
        <Header/>
        <Route path='/' exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
          </>
        )}/>
        <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>
    </Router>
  )
}

export default App;