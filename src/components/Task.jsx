import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes, FaBell, FaCheck } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onComplete }) => {
  return (
    <div className={`task ${task.reminder ? 'task--shake' : ''}`}>
      <h3 className={task.complete && 'task__cross'}>
        <span>{task.text}</span>
        <FaBell
          onClick={() => {
            onToggle(task.id)
          }}
          className={`task__FaBell ${
            task.reminder ? 'task__FaBell--true' : ''
          } ${task.complete ? `task__FaBell--hide` : ''}`}
        />
        <FaCheck
          className='task__FaCheck'
          onClick={() => {
            onComplete(task.id)
          }}
        />
        <FaTimes
          className='task__FaTimes'
          onClick={() => {
            onDelete(task.id)
          }}
        />
      </h3>
      <p className={task.complete && 'task__cross'}>{task.description}</p>
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
