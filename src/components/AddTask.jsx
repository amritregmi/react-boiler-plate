import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Task name required')
      return
    }
    onAdd({ text, day, reminder })
    //clear the form
    setText('')
    setDay('')
    setDay('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='task'>
          Task
          <input
            type='text'
            id='task'
            placeholder='add task'
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </label>
      </div>
      <div className='form-control'>
        <label htmlFor='time'>
          Day and Time
          <input
            type='text'
            id='time'
            placeholder='Add day and time'
            value={day}
            onChange={(e) => {
              setDay(e.target.value)
            }}
          />
        </label>
      </div>
      <div className='form-control form-control--check'>
        <label htmlFor='reminder'>
          Set Reminder
          <input
            type='checkbox'
            id='reminder'
            placeholder='Add Date and Time'
            value={reminder}
            onChange={(e) => {
              setReminder(e.currentTarget.checked)
            }}
          />
        </label>
      </div>
      <input className='btn btn--block' type='submit' value='Save Task' />
    </form>
  )
}

AddTask.defaultProps = {}

AddTask.prototypes = {
  addTask: PropTypes.func.isRequired,
}

export default AddTask
