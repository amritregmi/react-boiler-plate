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
      text: 'Doctors Appointment',
      day: 'Feb 5th 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Function attend',
      day: 'Jan 21st 10:00am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Attend Meeting',
      day: 'March 5th 2:30pm',
      reminder: false,
    },
  ])
  const handleDelete = (id) => {
    const updatedTask = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(updatedTask)
  }
  const handleToggle = (id) => {
    const updatedTask = tasks.map((task) => {
      return task.id === id ? { ...task, reminder: !task.reminder } : task
    })
    setTasks(updatedTask)
  }
  const addTask = (task) => {
    // add to the state, but first add id
    const id = Math.floor(Math.random() * 1000 + 1)
    const newTask = { id, ...task }
    const updatedTask = [...tasks, newTask]
    setTasks(updatedTask)
  }
  const handleShowingForm = () => {
    setShowAddForm(!showAddForm)
  }
  return (
    <div className='container'>
      <Header onShow={handleShowingForm} showAdd={showAddForm} />
      {showAddForm && <AddTask onAdd={addTask} />}

      {/* if there is no task show message */}
      {tasks.length < 1 ? (
        'No Task to Show'
      ) : (
        <Tasks tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
      )}
      <Footer />
    </div>
  )
}

export default App
