import React, { useState } from 'react'
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

  return (
    <>
      <div className='container'>
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </>
  )
}

export default App;