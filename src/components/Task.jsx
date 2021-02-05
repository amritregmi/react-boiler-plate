import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes, FaBell } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className='task'>
      <h3>
        {task.text}
        <FaBell
          onClick={() => {
            onToggle(task.id)
          }}
          className={`task_FaBell ${task.reminder ? 'task__FaBell--true' : ''}`}
        />

        <FaTimes
          className='task__FaTimes'
          onClick={() => {
            onDelete(task.id)
          }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}
Task.defaultProps = {
  task: '',
}
Task.propTypes = {
  task: PropTypes.objectOf(PropTypes.any),
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default Task
