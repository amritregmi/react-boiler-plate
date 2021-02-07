import React, { useState } from 'react'

import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import Footer from './components/Footer'

const App = () => {
  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Chicken',
      description: '1kg',
      reminder: false,
      complete: false,
    },
    {
      id: 2,
      text: 'Milk',
      description: '2lt',
      reminder: true,
      complete: false,
    },
    {
      id: 3,
      text: 'Chips',
      description: 'Smiths',
      reminder: false,
      complete: false,
    },
  ])

  // handles Delete icon
  const handleDelete = (id) => {
    const updatedTask = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(updatedTask)
  }

  // handles checkbox ; marks important or !important
  const handleToggle = (id) => {
    const updatedTask = tasks.map((task) => {
      return task.id === id ? { ...task, reminder: !task.reminder } : task
    })
    setTasks(updatedTask)
  }

  // handles check Icon
  const handleComplete = (id) => {
    const updatedTask = tasks.map((task) => {
      return task.id === id ? { ...task, complete: !task.complete } : task
    })
    setTasks(updatedTask)
  }

  // adds a task
  const addTask = (task) => {
    // add to the state, but first add id
    const id = Math.floor(Math.random() * 1000 + 1)
    const newTask = { id, ...task }
    const updatedTask = [...tasks, newTask]
    setTasks(updatedTask)
  }

  // handles showing button ; Close or Add button
  const handleShowingForm = () => {
    setShowAddForm(!showAddForm)
  }

  // returns App
  return (
    <div className='container'>
      <Header onShow={handleShowingForm} showAdd={showAddForm} />
      {showAddForm && <AddTask onAdd={addTask} />}

      {/* if there is no task show message */}
      {tasks.length < 1 ? (
        'No Task to Show'
      ) : (
        <Tasks
          tasks={tasks}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onComplete={handleComplete}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
