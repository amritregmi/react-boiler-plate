import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [description, setDescription] = useState('')
  const [reminder, setReminder] = useState(false)
  const [validInput, setValidInput] = useState(true)

  const onSubmit = (e) => {
    e.preventDefault()

    // input field cannot be empty and no spaces
    if (!text || text.trim() === '') {
      setValidInput(false)

      return
    }

    onAdd({ text, description, reminder })

    //clear the form
    setText('')
    setDescription('')
    setReminder(false)
    setValidInput(true)
  }
  const onTyping = (e) => {
    if (text.length === 0) {
      setValidInput(true)
    }
    setText(e.target.value)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='task'>
          Item Name
          <input
            type='text'
            id='task'
            placeholder='Add Item'
            value={text}
            onChange={(e) => {
              onTyping(e)
            }}
            className={
              validInput ? 'form-control--valid' : 'form-control--notvalid'
            }
          />
          <span
            className={`message ${
              validInput ? 'message--hidden' : 'message--show'
            }`}
          >
            Invalid - Item Name cannot be empty
          </span>
        </label>
      </div>
      <div className='form-control'>
        <label htmlFor='time'>
          Description
          <input
            type='text'
            id='time'
            placeholder='Add Description'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </label>
      </div>
      <div className='form-control form-control--check'>
        <label htmlFor='reminder'>
          Mark as Important
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
      <input className='btn btn--block' type='submit' value='Save Item' />
    </form>
  )
}

AddTask.defaultProps = {}

AddTask.prototypes = {
  addTask: PropTypes.func.isRequired,
}

export default AddTask
