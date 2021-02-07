import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import Footer from './components/Footer'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([])
  const routes = 'http://localhost:5000'

  // fetch all data from the backend
  const fetchData = async () => {
    const res = await fetch(`${routes}/tasks`)
    const data = await res.json()
    return data
  }
  // fetch single data from the backend
  const fetchSingleData = async (id) => {
    const res = await fetch(`${routes}/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // This guy runs automatically when App component is called
  useEffect(() => {
    const getTasks = async () => {
      const dataFromServer = await fetchData()
      setTasks(dataFromServer)
    }
    getTasks()
  }, [])

  // Deletes the task
  const handleDelete = async (id) => {
    // delete from db
    await fetch(`${routes}/tasks/${id}`, {
      method: 'DELETE',
    })
    // update in UI
    const updatedTask = tasks.filter((task) => {
      return task.id !== id
    })
    setTasks(updatedTask)
  }

  // handles Bell Icon ; marks important or !important
  const handleToggle = async (id) => {
    //get the data that needs to be updates
    const dataToUpdate = await fetchSingleData(id)

    //modify the data
    const updatingData = { ...dataToUpdate, reminder: !dataToUpdate.reminder }

    //update modified data to db
    const res = await fetch(`${routes}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatingData),
    })

    //response from server after update
    const updatedData = await res.json()

    //update to UI using Updated data
    const updatedTask = tasks.map((task) => {
      return task.id === id
        ? { ...task, reminder: !updatedData.reminder }
        : task
    })
    setTasks(updatedTask)
  }

  // handles check Icon
  const handleComplete = async (id) => {
    //get the data that needs to be updates
    const dataToUpdate = await fetchSingleData(id)

    //modify the data
    const updatingData = { ...dataToUpdate, complete: !dataToUpdate.complete }

    //update modified data to db
    const res = await fetch(`${routes}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatingData),
    })

    //response from server after update
    const updatedData = await res.json()

    //update to UI using updated data
    const updatedTask = tasks.map((task) => {
      return task.id === id
        ? { ...task, complete: !updatedData.complete }
        : task
    })
    setTasks(updatedTask)
  }

  // Adds a task
  const addTask = async (task) => {
    // add data to db
    const res = await fetch(`${routes}/tasks`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task),
    })
    const data = await res.json()

    // update in UI
    setTasks([...tasks, data])
  }

  // handles showing button ; Close or Add button
  const handleShowingForm = () => {
    setShowAddForm(!showAddForm)
  }

  // returns App
  return (
    <Router>
      <div className='container'>
        <Route
          path='/'
          exact
          render={() => {
            return (
              <>
                <Header onShow={handleShowingForm} showAdd={showAddForm} />
                {showAddForm && <AddTask onAdd={addTask} />}
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
              </>
            )
          }}
        />

        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  )
}

export default App
